import { Outlet } from "react-router";

export default function GlobalLayout() {
  return (
    <div>
      {/* 공통 헤더를 의미함 */}
      <header>헤더</header>
      <main>
        {/* 현재 라우트에 매칭된 자식 컴포넌트가 여기에 렌더링됨 */}
        <Outlet />
      </main>
    </div>
  );
}
