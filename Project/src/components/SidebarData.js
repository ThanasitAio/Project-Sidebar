import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper/>,
            },
        ]

    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'Reports',
                path: '/reports/Reports1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports 2',
                path: '/reports/Reports2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports 3',
                path: '/reports/Reports3',
                icon: <IoIcons.IoIosPaper/>,
            },
        ]

    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus/>
    },
    {
        title: 'Team',
        path: '/team',
        icon: <AiIcons.AiOutlineTeam/>
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'Message 1',
                path: '/messages/messages1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Message 2',
                path: '/messages/messages1',
                icon: <IoIcons.IoIosPaper/>,
            },
            
        ]

    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoIosPaper/>
    }
    

]