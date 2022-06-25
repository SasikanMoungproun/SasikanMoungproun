import type { Navs } from '@/layouts/dashboard'

import { mdiViewDashboard, mdiAccountGroup, mdiPlusCircle,mdiBus, mdiCardAccountDetails, 
    mdiBusStop, mdiMapMarkerPath, mdiMapMarker, mdiCameraImage} from '@mdi/js'

const navs: Navs = [
    { label: 'แดชบอร์ด', href: '/', icon: mdiViewDashboard },
    {
        label: 'บัญชีผู้ใช้งาน', href: '#', icon: mdiAccountGroup,
        children: [
            { label: 'ผู้ใช้งานทั้งหมด', href: '/account', icon: mdiAccountGroup },
            { label: 'เพิ่มผู้ใช้งานใหม่', href: '/account/add', icon: mdiPlusCircle },
        ]
    },
    {
        label: 'การเข้าทำงาน', href: '#', icon: mdiCardAccountDetails,
        children: [
            { label: 'การเข้าทำงานทั้งหมด', href: '/driverjob', icon: mdiCardAccountDetails },
            { label: 'เพิ่มการเข้างาน', href: '/driverjob/add', icon: mdiPlusCircle },
        ]
    },
    {
        label: 'ข้อมูลรถโดยสาร', href: '#', icon: mdiBus,
        children: [
            { label: 'รถโดยสารทั้งหมด', href: '/bus', icon: mdiBus },
            { label: 'เพิ่มรถโดยสาร', href: '/bus/add', icon: mdiPlusCircle },
        ]
    },
    {
        label: 'ข้อมูลสถานีรถโดยสาร', href: '#', icon: mdiBusStop,
        children: [
            { label: 'สถานีรถโดยสารทั้งหมด', href: '/bus', icon: mdiBusStop },
            { label: 'เพิ่มสถานีรถโดยสาร', href: '/bus/add', icon: mdiPlusCircle },
        ]
    },
    {
        label: 'เส้นทางรถโดยสาร', href: '#', icon: mdiMapMarkerPath,
        children: [
            { label: 'เส้นทางรถโดยสารทั้งหมด', href: '/bus', icon: mdiMapMarkerPath },
            { label: 'เพิ่มเส้นทาง', href: '/bus/add', icon: mdiPlusCircle },
        ]
    },
    {
        label: 'Location', href: '#', icon: mdiMapMarker,
        children: [
            { label: 'Location ทั้งหมด', href: '/bus', icon: mdiMapMarker },
            { label: 'เพิ่ม Location', href: '/bus/add', icon: mdiPlusCircle },
        ]
    },
    {
        label: 'ข้อมูลของสถานที่ท่องเที่ยว', href: '#', icon: mdiCameraImage,
        children: [
            { label: 'ข้อมูลสถานที่ท่องเที่ยวทั้งหมด', href: '/bus', icon: mdiCameraImage },
            { label: 'เพิ่มสถานที่ท่องเที่ยว', href: '/bus/add', icon: mdiPlusCircle },
        ]
    },
]

export default navs