
import React, { Component } from 'react';
import styles from './home.module.scss';
import WorkLists from '../../components/WorkLists';
import worksData from '../works.json';

export default () =>{
    return <div className={ styles.wrap }>

        {/* 个人简介 */}
        <section className={ styles.brief }>
            <img src={ require("../../assets/images/self-photo.jpg") } />
            <h2>Xing Tong</h2>
            <ul>
                <li>software engineer</li>
                <li>data engineer</li>
                <li>Foodie</li>
                <li>A bored person</li>
            </ul>
            <p>I am a student in NORTHEASTERN UNIVERSITY.</p>
            <p>I am a beginner for learning coding.</p>
            <p>Love to cook.</p>
        </section>

        {/* 作品列表 */}
        <section className={ styles.work }>
            <div className={ styles.title }>
                <h3>A selection of work</h3>
                <p>You can find more in the work overview.</p>
            </div>
            <WorkLists dataSource = { worksData.data } />
        </section>

    </div>
}
