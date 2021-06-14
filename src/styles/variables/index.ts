import { colors } from "./colors";
import { fonts } from "./fonts";
import { mixins } from "./mixin";
import { changeColor } from "./animations";

export const variables = {
  ...colors,
  ...fonts,
  ...mixins,
  ...changeColor,
};
