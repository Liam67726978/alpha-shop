import { useImmer } from "use-immer";
import { useEffect } from "react";
import classNames from "classnames";
import styles from "./Progress.module.scss";
import Icons from "./Icons";

const initalProgressStatus = [
  {
    name: "寄送地址",
    step: 1,
    className: {
      [styles.active]: true,
      [styles.inactive]: false,
    },
    lineClassName: {
      [styles.hidden]: false,
      [styles.inactive]: false,
    },
    checked: false,
  },
  {
    name: "運送方式",
    step: 2,
    className: {
      [styles.active]: false,
      [styles.inactive]: true,
    },
    lineClassName: {
      [styles.hidden]: false,
      [styles.inactive]: true,
    },
    checked: false,
  },
  {
    name: "付款資訊",
    step: 3,
    className: {
      [styles.active]: false,
      [styles.inactive]: true,
    },
    lineClassName: {
      [styles.hidden]: true,
    },
    checked: false,
  },
];

function Progress({ step }) {
  const [progressStatus, updateProgressStatus] = useImmer(initalProgressStatus);

  useEffect(() => {
    if (step === 1) {
      updateProgressStatus((draft) => {
        draft[0].checked = false;
        draft[1] = {
          name: "運送方式",
          step: 2,
          className: {
            [styles.active]: false,
            [styles.inactive]: true,
          },
          lineClassName: {
            [styles.hidden]: false,
            [styles.inactive]: true,
          },
          checked: false,
        };
        draft[2] = {
          name: "付款資訊",
          step: 3,
          className: {
            [styles.active]: false,
            [styles.inactive]: true,
          },
          lineClassName: {
            [styles.hidden]: true,
          },
          checked: false,
        };
      });
    } else if (step === 2) {
      updateProgressStatus((draft) => {
        draft[0].checked = true;
        draft[1] = {
          name: "運送方式",
          step: 2,
          className: {
            [styles.active]: true,
            [styles.inactive]: false,
          },
          lineClassName: {
            [styles.hidden]: false,
            [styles.inactive]: false,
          },
          checked: false,
        };
        draft[2] = {
          name: "付款資訊",
          step: 3,
          className: {
            [styles.active]: false,
            [styles.inactive]: true,
          },
          lineClassName: {
            [styles.hidden]: true,
          },
          checked: false,
        };
      });
    } else {
      updateProgressStatus((draft) => {
        draft[1].checked = true;
        draft[2] = {
          name: "付款資訊",
          step: 3,
          className: {
            [styles.active]: true,
            [styles.inactive]: false,
          },
          lineClassName: {
            [styles.hidden]: true,
          },
          checked: false,
        };
      });
    }
  }, [step]);

  return (
    <div className={styles.progressWrapper}>
      <h2 className={styles.registerTitle}>結帳</h2>
      <div className={styles.stepWrapper}>
        {progressStatus.map((status) => {
          return (
            <StepGroup
              key={status.step}
              name={status.name}
              step={status.step}
              className={status.className}
              lineClassName={status.lineClassName}
              checked={status.checked}
            />
          );
        })}
      </div>
    </div>
  );
}

function StepGroup({ name, step, className, lineClassName, checked }) {
  return (
    <>
      <span className={styles.stepGroup}>
        <span className={styles.stepNumber}>
          <ReturnIcon className={className} step={step} checked={checked} />
        </span>
        <span className={classNames(styles.stepText, className)}>{name}</span>
      </span>
      <ReturnStepLine lineClassName={lineClassName} />
    </>
  );
}

function ReturnIcon({ step, checked, className }) {
  if (checked) return <Icons.Checked />;
  if (step === 1) return <Icons.Step1 className={classNames(className)} />;
  if (step === 2) return <Icons.Step2 className={classNames(className)} />;
  if (step === 3) return <Icons.Step3 className={classNames(className)} />;
}

function ReturnStepLine({ lineClassName }) {
  return (
    <div className={classNames(styles.stepLineWrapper, lineClassName)}>
      <span className={styles.stepLine}></span>
    </div>
  );
}

export default Progress;
