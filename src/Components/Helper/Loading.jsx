import React, { useState, useEffect}from "react";
import styles from "./Loading.module.css";

const Loading = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        function updateStep() {
            setStep((step) => {
                if (step < 1) return step + 1;
                else return 0;
            });
        }
        const interval = setInterval(updateStep, 300);
        return () => {
            clearInterval(interval);
        };
    }, []);

    function displayStep(i) {
        return {
            display: step === i ? "block" : "none",
        };
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.loading}>
            <svg x="0px" y="0px"
	 width="46px" height="46px" viewBox="0 0 124.805 124.805" 
	 >
<g>
	<path d="M111.1,5.103c-1.8,0-3.5,0.3-5.199,1l-19.601,7.9c-7.5-2.7-15.5-4.1-23.8-4.1c-8.2,0-16.2,1.4-23.8,4.1l-19.6-7.9
		c-1.7-0.7-3.4-1-5.2-1c-7.7,0-13.9,6.2-13.9,13.9l0.1,48.4c0,0.399,0,0.8,0,1.101c2.2,28.699,29.6,51.199,62.3,51.199
		c32.8,0,60.2-22.5,62.3-51.199c0-0.4,0-0.701,0-1.101l0.1-48.5C125,11.302,118.8,5.103,111.1,5.103z M108.9,67.302
		c-1.5,20.4-21.9,36.4-46.4,36.4c-24.4,0-44.8-16-46.4-36.4L16,22.002l17.4,7.1c3.2,1.3,6.9,1.4,10.1,0.2c6-2.2,12.3-3.4,18.9-3.4
		s13,1.1,19,3.4c3.199,1.2,6.899,1.2,10.1-0.2l17.4-7.1V67.302z"/>
	<g style={displayStep(0)}><circle cx="42.3" cy="68.503" r="10"/></g>
	<g style={displayStep(1)}><circle cx="82.7" cy="68.503" r="10"/></g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

            </div>
        </div>
    );
};

export default Loading;
