import classNames from "classnames";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getTurn } from "../getTurn";
import { ACTIVE_TURN_ORDER } from "../turnOrders";
import styles from "./TurnIndicator.module.css";

const TurnIndicator = () => {
    const globalTurnIndex = useSelector((state) => state.chess.globalTurnIndex);
    const turns = useMemo(() => {
        const turns = [];
        for (let i = 0; i < ACTIVE_TURN_ORDER.length; i++) {
            turns.push(getTurn(globalTurnIndex + i));
        }
        return turns;
    }, [globalTurnIndex]);

    // Get player names
    const player1Name = useSelector((state) => state.chess.player1Name);
    const player2Name = useSelector((state) => state.chess.player2Name);

    return (
        <div className={styles.container}>
            <div className={styles.turns}>
                {turns.map((turn, index) => {
                    const [player, color] = turn;
                    const playerName =
                        player === "1" ? player1Name : player2Name;
                    return (
                        <div
                            className={classNames(styles.turn, {
                                [styles.isActive]: index === 0,
                            })}
                            key={`turn-${index}`}
                        >
                            <div
                                className={classNames(
                                    styles.player,
                                    styles[`player${player}`],
                                )}
                            >
                                <div className={styles.color} />
                                <div className={styles.text}>{playerName}</div>
                            </div>
                            <div
                                className={classNames(
                                    styles.pieceColor,
                                    styles[`color${color.toUpperCase()}`],
                                )}
                            >
                                <div className={styles.color} />
                                <div className={styles.text}>
                                    {color === "w" ? "White" : "Black"}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TurnIndicator;
