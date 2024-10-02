import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    input: {
        width: "100%",
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: COLORS.light_gray
    },
    label: {
        marginLeft: 5,
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
        marginBottom: 4
    }
}