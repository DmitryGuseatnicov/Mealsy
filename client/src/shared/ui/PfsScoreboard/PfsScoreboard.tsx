import React, { FC } from 'react';
import './PfsScoreboard.scss';

type PfsValue = string | number;

interface IPfsScoreboard {
  proteins: PfsValue;
  fats: PfsValue;
  carbohydrates: PfsValue;
  energyValue: PfsValue;
}

const PfsScoreboard: FC<IPfsScoreboard> = (props) => {
  const { proteins, fats, carbohydrates, energyValue } = props;

  return (
    <div className="pfs-scoreboard">
      <div className="pfs-scoreboard__item">
        <div className="pfs-scoreboard__name">энергия</div>
        <div className="pfs-scoreboard__value">{energyValue} Ккал</div>
      </div>
      <div className="pfs-scoreboard__item">
        <div className="pfs-scoreboard__name">белки</div>
        <div className="pfs-scoreboard__value">{proteins} гр.</div>
      </div>
      <div className="pfs-scoreboard__item">
        <div className="pfs-scoreboard__name">жиры</div>
        <div className="pfs-scoreboard__value">{fats} гр.</div>
      </div>
      <div className="pfs-scoreboard__item">
        <div className="pfs-scoreboard__name">углеводы</div>
        <div className="pfs-scoreboard__value">{carbohydrates} гр.</div>
      </div>
    </div>
  );
};

export type { IPfsScoreboard };
export default PfsScoreboard;
