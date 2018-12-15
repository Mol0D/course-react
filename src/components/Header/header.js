import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

<<<<<<< HEAD
import Link from './link';

const List = styled.ul`
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
`
class Header extends Component{
    render(){
        return (
            <Row> 
                <Col lg={12}>
                    <nav>
                        <List>
                            <Link link="#" text="Вызов мастера" />
                            <Link link="#" text="Прайс на ремонт" />
                            <Link link="#" text="Наши преимущества" />
                            <Link link="#" text="Схема работы" />
                            <Link link="#" text="Отзывы клиентов" />
                            <Link link="#" text="Примеры работ" />
                            <Link link="#" text="Контакты" />
                        </List>
                    </nav>
                </Col>
            </Row>
=======
class Header extends Component{
    render(){
        return (
            <h1>Header</h1>
>>>>>>> fc033ced5bd65139657dbe4589158e697a9d02f6
        )
    }
}

export default Header;