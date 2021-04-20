import { Suspense, lazy } from "preact/compat";

const P5 = lazy(() => import("./P5"));

export function App(props) {
  return (
    <div className="container">
      <Suspense fallback={<span>Loading...</span>}>
        <P5 />
      </Suspense>
    </div>
  );
}
