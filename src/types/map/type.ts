// mapList type
export type MapItemProps = {
  title: string;
  category?: string; // 분류값
  center: { lat: number; lng: number };
  address?: string;
  content?: string;
};
