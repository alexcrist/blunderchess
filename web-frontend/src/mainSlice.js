import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "main",
    initialState: {
        globalTurnIndex: 0,
        boardSizePx: null,
        boardState: {
            a1: "wr",
            b1: "wn",
            c1: "wb",
            d1: "wq",
            e1: "wk",
            f1: "wb",
            g1: "wn",
            h1: "wr",
            a2: "wp",
            b2: "wp",
            c2: "wp",
            d2: "wp",
            e2: "wp",
            f2: "wp",
            g2: "wp",
            h2: "wp",
            a7: "bp",
            b7: "bp",
            c7: "bp",
            d7: "bp",
            e7: "bp",
            f7: "bp",
            g7: "bp",
            h7: "bp",
            a8: "br",
            b8: "bn",
            c8: "bb",
            d8: "bq",
            e8: "bk",
            f8: "bb",
            g8: "bn",
            h8: "br",
        },
        boardSquaresBounds: {},
        moveHistory: [],
        hasBlackKingMoved: false,
        hasWhiteKingMoved: false,
        sourceCoordinate: null,
        hoveredCoordinate: null,
        isMouseDown: false,
        draggedPieceXY: null,
        possibleMoves: [],
        player1Name: "Player 1",
        player2Name: "Player 2",
    },
    reducers: {
        setBoardSizePx: (state, action) => {
            state.boardSizePx = action.payload;
        },
        makeMove: (state, action) => {
            const move = action.payload;
            const { source, dest } = move;
            const sourcePiece = state.boardState[source];
            const [pieceColor, pieceType] = sourcePiece;
            if (pieceType === "k") {
                if (pieceColor === "w") {
                    state.hasBlackKingMoved = true;
                } else {
                    state.hasBlackKingMoved = true;
                }
            }
            state.boardState[dest] = state.boardState[source];
            delete state.boardState[source];
            state.moveHistory.push(move);
            state.globalTurnIndex++;
        },
        setBoardSquareBounds: (state, action) => {
            const { coordinate, bounds } = action.payload;
            state.boardSquaresBounds[coordinate] = bounds;
        },
        setSourceCoordinate: (state, action) => {
            state.sourceCoordinate = action.payload;
        },
        setIsMouseDown: (state, action) => {
            state.isMouseDown = action.payload;
        },
        setDraggedPieceXY: (state, action) => {
            state.draggedPieceXY = action.payload;
        },
        setHoveredCoordinate: (state, action) => {
            state.hoveredCoordinate = action.payload;
        },
        setPossibleMoves: (state, action) => {
            state.possibleMoves = action.payload;
        },
    },
});

export default mainSlice;
