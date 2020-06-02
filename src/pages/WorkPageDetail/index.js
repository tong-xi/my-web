
import React, { Component } from 'react';
import styles from './detail.module.scss';

export default () =>{
    return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
               <h1>作品1</h1>
               <p>2020</p>
            </div>
            <section className={ styles.content }>
                <p>
                   详情介绍
                </p>

            </section>
        </div>
    </div>
}
