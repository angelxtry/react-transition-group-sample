import React from 'react';
import {ReactComponent as MoonSvg} from "./images/ic-btn-emo-moon.svg"

export default function Home() {
  return (
    <div className="page">
      <section>
        <MoonSvg />
        <span>여기는 Home 이에요.</span>
      </section>
    </div>
  );
}
