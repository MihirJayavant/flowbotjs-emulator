import { IActivity, IDialogAction } from "@flowbotjs/core";
import { IBotState } from "../state";

export function askName(): IDialogAction<IBotState> {
  return {
    navigateTo: { parent: ["basic"], path: "age" },
    message: "What's your name?"
  };
}

export function askAge(activity: IActivity): IDialogAction<IBotState> {
  return {
    navigateTo: { parent: ["basic"], path: "checkAge" },
    message: "What's your age?",
    state: { name: activity.message }
  };
}

export function checkAge(
  activity: IActivity,
  state: IBotState
): IDialogAction<IBotState> {
  const age = Number(activity.message);

  if (isNaN(age)) {
    return {
      navigateTo: { parent: ["basic"], path: "checkAge" },
      message: "Invalid age. Enter again"
    };
  } else if (age <= 0 || age >= 100) {
    return {
      navigateTo: { parent: ["basic"], path: "checkAge" },
      message: "Age should be between 1 to 100"
    };
  } else {
    return {
      message: `Saved. Name: ${state.name} and age: ${age}`,
      state: { age }
    };
  }
}
