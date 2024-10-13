import {
  ActionFunction,
  createBrowserRouter,
  LoaderFunction,
  RouterProvider,
} from "react-router-dom";
import Nav from "./components/UI/organisms/nav/Nav";

interface RouteCommon {
  loader?: LoaderFunction;
  action?: ActionFunction;
  ErrorBoundary?: React.ComponentType;
}

interface IRoute extends RouteCommon {
  path: string;
  Element: React.ComponentType;
}

interface Pages {
  [key: string]: {
    default: React.ComponentType;
  } & RouteCommon;
}

const pages: Pages = import.meta.glob("./pages/**/*.{tsx,jsx}", {
  eager: true,
});
const routes: IRoute[] = [];

for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.(tsx|jsx)$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName
    .replace(/\[([^\]]+)\]/g, ":$1") // Convert [param] to :param
    .replace(/\/index$/, "") // Remove /index at the end
    .toLowerCase(); // Ensure the path is lowercase

  if (normalizedPathName.includes(":")) {
    routes.push({
      path: `/${normalizedPathName}`,
      Element: pages[path].default,
      loader: pages[path]?.loader as LoaderFunction | undefined,
      action: pages[path]?.action as ActionFunction | undefined,
      ErrorBoundary: pages[path]?.ErrorBoundary,
    });
  } else {
    routes.push({
      path: fileName === "index" ? "/" : `/${normalizedPathName}`,
      Element: pages[path].default,
      loader: pages[path]?.loader as LoaderFunction | undefined,
      action: pages[path]?.action as ActionFunction | undefined,
      ErrorBoundary: pages[path]?.ErrorBoundary,
    });
  }
}
const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => {
    const NoneShowNav = rest.path.startsWith("/purchase/");
    const ElementHeight = !NoneShowNav ? "calc(100vh - 4rem)" : ""; // 높이 설정

    return {
      ...rest,
      element: (
        <div className="App">
          <div className="Element" style={{ height: ElementHeight }}>
            <Element />
          </div>
          {!NoneShowNav && <Nav />} {/* NoneShowNav가 false일 때만 Nav 표시 */}
        </div>
      ),
      ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
    };
  })
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
