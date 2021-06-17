import React, {useState} from 'react';
import delVector from '../../../../img/DelVector.png'
import plVector from '../../../../img/PlVector (1).png'

const ObjectList = () => {

    const [checkedList, setCheckedList] = useState([])
    const generateData = (item) => {
        const i = checkedList.indexOf(item.key);
        if (i > -1) {
            checkedList.splice(i, 1)
        } else {
            checkedList.push(item.key)
        }
        setCheckedList([...checkedList])
    };

    const treeData = [
        {
            title: 'Восточный административный округ',
            plus: true,
            key: '0',
            children: [
                {title: 'leaf 0-0', key: '0-0-0', isLeaf: true},
                {title: 'leaf 0-1', key: '0-0-1', isLeaf: true},
            ],
        },
        {
            title: 'Южный   административный округ',
            plus: true,
            key: '2',
            children: [
                // {title: 'Братеево', key: '2-1', isLeaf: false, children: []},
                {
                    title: 'Царицыно', key: '2-2', isLeaf: false, children: [
                        // {title: 'Административное здание', key: '2-2-1', isLeaf: false, children: []},
                        {
                            title: 'Многоквартирный дом', key: '2-2-2', isLeaf: false, children: [
                                // {title: 'Царицыно', key: '2-3-1', isLeaf: false, children: []},
                                {
                                    title: 'ул. Гоголя, 5', key: '2-3-2', isLeaf: false,
                                    children: [
                                        // {title: 'Квартира', key: '2-3-3', isLeaf: false, children: []},
                                        {
                                            title: 'Подвал', key: '2-3-4', isLeaf: false,
                                            children: [
                                                {title: 'Подвал 1', key: '2-3-5', isLeaf: true},
                                                {title: 'Подвал 2', key: '2-3-6', isLeaf: true},
                                                {title: 'Подвал 3', key: '2-3-7', isLeaf: true},
                                                {title: 'Подвал 4', key: '2-3-8', isLeaf: true},
                                            ]
                                        },
                                    ]
                                },
                            ]
                        }
                    ]
                },
            ],
        },
    ];
    const [showImg, setShowImg] = useState(false)

    const hoverFun = (e) => {
        if (e.target) {
            setShowImg(true)
        }
    }
    const renderList = (list = []) => {
        return (
            list.map(l => {
                const checked = checkedList.includes(l.key)
                const treeChildren = Object.keys(l).includes('children')
                return (
                    <React.Fragment key={l.key}>
                        <div
                            className={`plusMinusDiv ${checked && treeChildren && l['children'].length ? 'add' : ''}`}>
                            {treeChildren && <div className={"plusDiv"}><span style={{cursor:"pointer"}}
                                onClick={() => generateData(l)}>{!checked ? '+' : '-'}</span></div>}
                            <div className={'p'} onMouseOver={hoverFun} onMouseOut={() => setShowImg(false)}><p
                                className={`${!treeChildren ? 'treeP' : ''}`}>
                                {l.title}
                                {showImg && <span><img src={delVector} alt="delVector"/>
                                <img src={plVector} alt="plVector"/></span>}
                            </p>
                                {checked && l.children?.length ? (
                                    <div className="children">
                                        {renderList(l.children)}
                                    </div>
                                ) : null}</div>
                        </div>
                    </React.Fragment>
                )
            })

        )
    }
    return (
        <div className="dashboard-content_tabs">
            <div className="dashboard-content_tabs-content" style={{height: "700px"}}>
                <div className="actions-panel">
                    <form><input placeholder="Поиск" className="input" value=""/></form>
                    <div className="actions-panel_button">
                        <button className="button white blue-outline">Создать</button>
                        <button className="button white blue-outline">Импорт</button>
                        <button className="button white green-outline">Экспорт</button>
                        <div className="filter-button"><img src="./child_files/filter-icon.svg" alt=""/>
                            <p>Фильтры</p></div>
                    </div>
                </div>
                <div>
                    <div className="objects-list">
                        <div className="objects-list_tree">
                            <div className="ant-tree ant-tree-icon-hide draggable-tree ant-tree-show-line">
                                <div role="tree"><input tabIndex="0" value=""
                                                        style={{
                                                            width: "0px",
                                                            height: "0px",
                                                            display: "flex",
                                                            overflow: "hidden",
                                                            opacity: 0,
                                                            border: "0px",
                                                            padding: " 0px",
                                                            margin: "0px"
                                                        }}/>
                                </div>
                                <div className="ant-tree-treenode" aria-hidden="true"
                                     style={{
                                         position: "absolute",
                                         pointerEvents: "none",
                                         visibility: "hidden",
                                         height: 0,
                                         overflow: "hidden"
                                     }}>
                                    <div className="ant-tree-indent">
                                        <div className="ant-tree-indent-unit"></div>
                                    </div>
                                </div>
                                <div className="ant-tree-list" style={{position: "relative"}}>
                                    <div className="ant-tree-list-holder" style={{display:'flex'}}>
                                        {renderList(treeData)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="objects-list_table">
                            <div className="list_table">
                                <div className="list_table-head"><p>Атрибут</p>
                                    <p>Значение атрибута</p></div>
                                <div className="list_table-body">
                                    <div className="list_table-body_item"><p>Количество комнат</p>
                                        <p>Площадь</p>
                                        <p>Глубина</p></div>
                                    <div className="list_table-body_item"><p>3</p>
                                        <p>150 м2</p>
                                        <p>4 м</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ObjectList;
