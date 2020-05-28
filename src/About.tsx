import React from 'react';
import {ReactComponent as LoveSvg} from "./images/ic-btn-emo-love.svg"

export default function About() {
  return (
    <div className="page">
      <section>
        <LoveSvg />
        <span>여기는 ABOUT 이구요.</span>
      </section>
    </div>
  );
}
