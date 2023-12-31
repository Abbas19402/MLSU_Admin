import Icons from "@/components/Icons"

const SidebarRoutes = [
    {
        route: '/ ',
        label: 'Students',
        icon: <Icons.Student className="h-6 w-6"/>
    },
    {
        route: 'faculty',
        label: 'Faculty',
        icon: <Icons.Faculty className="h-6 w-6"/>
    },
    {
        route: 'events',
        label: 'Events',
        icon: <Icons.Events className="h-6 w-6"/>
    },
    {
        route: 'notifications',
        label: 'Notifications',
        icon: <Icons.Notification className="h-6 w-6"/>
    }
]

export default SidebarRoutes