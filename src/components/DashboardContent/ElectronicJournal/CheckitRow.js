import vector from "../../../img/Vector 1.png"
import line from "../../../img/Line 73.png"
import {useState} from "react";
import {useSelector} from "react-redux";

export const CheckitRow = () => {
    const [showCheckits, setShowCheckits] = useState(true)
    const {checked} = useSelector(({dashboardReducer}) => dashboardReducer)
    return (

        <div>
            {showCheckits &&
            <div className={'chooseStolb'} style={{bottom: true ? '490px' : '0' }}>
                <div className={'head'}>
                    <h2>Выбор столбцов</h2>
                    <h5>Выберите столбцы, которые будут отображаться в таблице</h5>
                </div>
                <img src={line} alt="line" style={{width: "563px", marginLeft: "30px", marginTop: "30px"}}/>
                <div className={'checkedBoxes'}>
                    <div className="checkRight">
                        <div className={'fl'}>
                            <div className={'checkbox'}><img src={vector} alt="vector"/></div>
                            <span>ID</span></div>
                        <div className={'fl'}>
                            <div className={'checkbox'}><img src={vector} alt="vector"/></div>
                            <span>Дата создания</span></div>
                        <div className={'fl'}>
                            <div className={'checkbox'}><img src={vector} alt="vector"/></div>
                            <span>Объект обслуживания</span></div>
                        <div className={'fl'}>
                            <div className={'checkbox'}><img src={vector} alt="vector"/></div>
                            <span>Описание задания</span></div>
                        <div className={'fl'}>
                            <div className={'checkbox'}><img src={vector} alt="vector"/></div>
                            <span>Этап</span></div>
                    </div>
                    <div className="checkleft">
                        <div className={'fl'}>
                            <div className={'checkbox'}><img src={vector} alt="vector"/></div>
                            <span>Вид работ</span></div>
                        <div className={'fl'}>
                            <div className={'checkbox'}><img src={vector} alt="vector"/></div>
                            <span>Приоритет</span></div>
                        <div className={'fl'}>
                            <div className={'checkbox'}><img src={vector} alt="vector"/></div>
                            <span>Организация-исполнитель</span></div>
                        <div className={'fl'}>
                            <div className={'checkbox'}><img src={vector} alt="vector"/></div>
                            <span>Пользователь-исполнитель</span></div>
                    </div>
                </div>
                <button className='close' onClick={()=>setShowCheckits(false)}>
                    Закрыть
                </button>
                <button className="adjust" type={'submit'}>Применить</button>
            </div>
            }
        </div>
    )
}
