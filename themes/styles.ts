import { StyleFunctionProps, Styles, mode } from "@chakra-ui/theme-tools";

export const styles: Styles = {
  global: (props) => ({
    html: {
      bg: "gray.800",
    },
    body: {
      bg: mode("gray.50", "gray.800")(props),
      WebkitTapHighlightColor: "transparent",
    },
    "#chakra-toast-portal > *": {
      pt: "safe-top",
      pl: "safe-left",
      pr: "safe-right",
      pb: "safe-bottom",
    },
  }),
};
