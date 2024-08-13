import React from "react";
import { Outlet } from "react-router-dom";

const Layout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <header>Dashboard Header</header>
      <main>
        {children} {/* children을 렌더링 */}
        <Outlet /> {/* 하위 라우트를 렌더링 */}
      </main>
      <footer>Dashboard Footer</footer>
    </div>
  );
};

export default Layout;
