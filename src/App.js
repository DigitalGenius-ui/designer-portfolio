import React, { lazy, Suspense } from "react";
import Loading from "./Components/Loading/Loading";

const Home = lazy(() =>
  wait(1000).then(() => import("./Components/Home/Home"))
);

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </>
  );
}

export default App;

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
