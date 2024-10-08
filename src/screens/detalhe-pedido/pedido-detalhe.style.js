import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20,
        paddingTop: 25
    },
    header: {
        width: "100%",
        height: 40,
        justifyContent: "center"
    },
    containerBack: {
        position: "absolute",
        top: 7,
        left: 0
    },
    back: {
        width: 30,
        height: 30
    },
    titulo: {
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_gray,
        textAlign: "center"
    },
    valores: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 4,
        marginBottom: 4
    },
    valor: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray
    },
    total: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        fontWeight: "bold"
    }
}