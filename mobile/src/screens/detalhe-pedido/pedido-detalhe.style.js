import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 15
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
    },
    containerPedido: {
        width: "100%"
    },
    textPedido: {
        textAlign: "center",
        color: COLORS.red,
        fontSize: FONT_SIZE.md
    }
}