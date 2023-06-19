import React from "react";
import {Card} from "@uifabric/react-cards";
import { Text, initializeIcons } from "@fluentui/react";
import 'office-ui-fabric-react/dist/css/fabric.css';

const cards = [
    {
        title: 'Current Balance',
        amount: '$20 879',
        icon: 'Money',
        percentage: '2.3',
    },
    {
        title: 'Current Expenses',
        amount: '$22 851',
        icon: 'PaymentCard',
        percentage: '0.3',
    },
    {
        title: 'Current Income',
        amount: '$27 879',
        icon: 'Savings',
        percentage: '1.3',
    },
]

const CardSection = () => {
    initializeIcons();
    return (
        <div>
            {cards.map((card) => {
                <div className="s-Grid-col ms-sm-3 ms-xl-3">
                    <Card>
                        <Card.Section>
                            <Card.Item>
                                <i className={`ms-Icon ms-Icon--${card.icon}`}aria-hidden="true"></i>
                                <Text>{card.title}</Text>
                            </Card.Item>
                        </Card.Section>
                    </Card>
                </div>
            })}
        </div>
    )
}

export default CardSection;