import { useState } from "react";
import { TabContent } from "./components/TabContent"
import { TabHeader } from "./components/TabHeader";

const tabs = TabContent()
export const App = () => {
    const [status, setStatus] = useState([])

    const onChangeStatus = (id) => {
        setStatus(id)
    }

    return (
        <div className="main">
            <li className="list-tabs ">
                {tabs.map(tab =>
                    <TabHeader
                        key={tab.id}
                        tab={tab}
                        onChangeStatus={onChangeStatus}
                        status={status}
                    />
                )}
            </li>
            <div className="tab-content">
                {tabs.filter(tab => tab.id === status).map(tab => <p key={tab.id}>{tab.content}</p>)}
                {/* {tabs.map(tab => <p key={tab.id}>{tab.id === status ? tab.content : null}</p>)} */}
            </div>

        </div>
    )
}
