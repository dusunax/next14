"use client";

import Link from "next/link";

export default function Error(props) {
  const { error, reset } = props;

  return (
    <>
      <h3>Error: {error.message}</h3>
      <div>
        <button onClick={reset}>다시 시도</button>
        <Link href={".."}>
          <button>뒤로 가기</button>
        </Link>
      </div>
    </>
  );
}
