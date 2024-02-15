import React from 'react';
import {Collapse} from 'antd';
import  {hover} from "@testing-library/user-event/dist/hover";

const items = [
    {
        key: '1',
        label: <div className='flex justify-center aligns-start 2xl:gap-60 xl:gap-48 md:gap-28  sm:gap-16'>
            <h3>TWOHEARTS</h3>

            <div className='flex'>
                <ul type='none' className='flex justify-center gap-5 lg:visible '>
                    <li className="hover:'underline'">HOME</li>
                    <li>GROOM & BRIDE</li>
                    <li>OUR STORY</li>
                    <li>GREETINGS</li>
                    <li> BRIDESMAID & GROOMSMEN</li>
                    <li>WHEN&WHERE</li>
                    <li>RSVP</li>
                    <li>GALLERY</li>
                </ul>
                <p className=" block lg:hidden md:visible pl-20 ">MENU</p>
            </div>


        </div>,
        children: <div className="lg:hidden ">
            <ul type='none'>
                <li>HOME</li>
                <li>GROOM & BRIDE</li>
                <li>OUR STORY</li>
                <li>GREETINGS</li>
            </ul>
        </div>
    }

];
const Menubar = () => <Collapse defaultActiveKey={['1']} ghost items={items}
                                style={{backgroundColor: "", borderRadius: '0px'}}

/>

export default Menubar;