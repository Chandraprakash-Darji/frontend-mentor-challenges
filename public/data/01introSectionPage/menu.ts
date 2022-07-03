export type menuObjectType = {
    name: string;
    id: number;
    icon: string;
    iconInLeft:boolean;
    li: menuObjectType[] | [];
};
export interface menuListType {
    menu: menuObjectType[];
}
const menu: menuObjectType[] = [
    {
        name: "Features",
        id: 1,
        iconInLeft:false,
        icon: "icon-arrow-down.svg",
        li: [
            {
                name: "Todo List",
                id: 1,
                iconInLeft:true,
                icon: "icon-todo.svg",
                li: [],
            },
            {
                name: "Calendar",
                id: 2,
                iconInLeft:true,
                icon: "icon-calendar.svg",
                li: [],
            },
            {
                name: "Reminders",
                id: 3,
                iconInLeft:true,
                icon: "icon-reminders.svg",
                li: [],
            },
            {
                name: "Planning",
                id: 4,
                iconInLeft:true,
                icon: "icon-planning.svg",
                li: [],
            },
        ],
    },
    {
        name: "Company",
        id: 2,
        iconInLeft:false,
        icon: "icon-arrow-down.svg",
        li: [
            {
                name: "History",
                id: 1,
                iconInLeft:true,
                icon: "",
                li: [],
            },
            {
                name: "Our Team",
                id: 2,
                iconInLeft:true,
                icon: "",
                li: [],
            },
            {
                name: "Blog",
                id: 3,
                iconInLeft:true,
                icon: "",
                li: [],
            },
        ],
    },
    {
        name: "Career",
        id: 3,
        iconInLeft:false,
        icon: "",
        li: [],
    },
    {
        name: "About",
        id: 4,
        iconInLeft:false,
        icon: "",
        li: [],
    },
];

export default menu;
