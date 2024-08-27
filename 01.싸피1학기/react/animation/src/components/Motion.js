import React, {useState} from "react";
import {motion, useMotionValue, useTransform} from "framer-motion";
import "./Motion.css"

const Motion = function() {

    const [clicked, setClicked] = useState(false)

    const buttonVariants = {
        hover: (clicked) => ({
            scale : clicked ? 1 : 1.5,
        }),
        pressed : {
            scale: 0.5,
        },
        rest: {
            scale: 1,
        },
    }

    const blockVariants = {
        // 처음 컴포넌트가 나타날 때 상태
        initial: {
            rotate: 0,
        },
        // 애니메이션이 끝날 때 상태
        target: {
            rotate: 270,
        },
    }

    const rotate = useMotionValue(0)
    const scale = useTransform(rotate, [0, 270], [0, 1])


    const blockCircle = {
        initial: {
            y: -50,
        },
        target: {
            y: 100,
        },
    }

    // 자식 컴포넌트 애니메이션에 순차적으로 delay 주고 싶을 때
    const boxVariants = {
        out: {
            y: 600,
        },
        in: {
            y: 0,
            transition: {
                duration: 0.6,
                // first child는 parent가 나타나고 0.5s 후에 나타난다
                delayChildren: 0.5,
                // first child의 sibling child는 0.5s의 간격을 두고 나타난다
                staggerChildren: 0.5,
                // staggerChildren이 없다면
                // 모든 child가 parent가 나타나고 0.5s 후 동시에 나타난다
            }
        }
    }

    const iconVariants = {
        out: {
            x: -600,
        },
        in: {
            x: 0,
        },
    }

    return (
        <div className="main-container-4">
            <motion.div
                className="box"
                initial={{ scale: 0}}
                animate={{ scale: 1, rotateZ: 90}}
            />
            <motion.div 
                className="box2"
                // 처음 마운트 될 때(처음 모습)
                // 마운트 시 애니메이션을 원하지 않으면 initial = {false}
                initial={{ opacity: 0, scale: 0.2 }}
                // 애니메이션이 끝났을 때 상태
                animate={{ opacity: 1, scale: 1}}
                // 어떻게 애니메이션 할지
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            />
            <div className="buttonBox">
                <motion.button
                    initial="rest"
                    whileHover="hover"
                    whileTap="pressed"
                    variants={buttonVariants}
                    custom={clicked}
                    onClick={() => setClicked(true)}
                    style={{
                        position: "relative",
                        margin: "10px",
                        width: "90px",
                        height: "30px"
                    }}
                >
                    Click Me!
                </motion.button>
            </div>
            <motion.div
                style={{
                    background: "linear-gradient(90deg, #ffa0ae 0%, #aacaef 75%)",
                    height: "100px",
                    width: "100px",
                    borderRadius: "10px",
                    // rotate: rotate 와 동일
                    rotate,
                    scale,
                }}
                variants={blockVariants}
                initial="initial"
                animate="target"
                transition={{
                    ease: "easeInOut",
                    duration: 4,
                }}
            />
            <motion.div 
                style={{
                    background: "linear-gradient(90deg, #ffa0ae 0%, #aacaef 75%)",
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                }}
                variants={blockCircle}
                initial="initial"
                animate="target"
                transition={{
                    ease: "easeInOut",
                    duration: 0.7,    // 애니메이션이 총 걸리는 시간
                    delay: 2,         // 처음 애니메이션 delay
                    repeat: 3,        // 3번 반복 
                    repeatType: "loop",
                    repeatDelay: 0.5,   // 반복 될 때 delay
                }}
            />
            <motion.ul variants={boxVariants} initial="out" animate="in">
                <motion.li
                    role="img"
                    aria-labelledby="magic wand"
                    variants={iconVariants}
                    // parent의 initial, animate를 그대로 상속받기 때문에
                    // 속성을 입력하지 않아도 됨
                >
                    🚀
                </motion.li>
                <motion.li 
                    role="img"
                    aria-labelledby="sparkles" 
                    variants={iconVariants}
                >
                    ✨
                </motion.li>
            </motion.ul>
        </div>
    )
}

export default Motion;