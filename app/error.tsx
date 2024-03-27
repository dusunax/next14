"use client";

import { useRouter } from "next/navigation";

export default function Error(props) {
  const { error, reset } = props;
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <h3>Error: {error.message}</h3>
      <div>
        <button onClick={reset}>다시 시도</button>
        <button onClick={goBack}>뒤로 가기</button>
      </div>
    </>
  );
}
