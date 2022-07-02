export type menuObjectType = {
    name: string;
    id: number;
    icon: string;
    li: menuObjectType[] | [];
};
export interface menuListType {
    menu: menuObjectType[];
}
const menu: menuObjectType[] = [
    {
        name: "Features",
        id: 1,
        icon: "",
        li: [
            {
                name: "Todo List",
                id: 1,
                icon: "icon-todo.svg",
                li: [],
            },
            {
                name: "Calendar",
                id: 2,
                icon: "icon-calendar.svg",
                li: [],
            },
            {
                name: "Reminders",
                id: 3,
                icon: "icon-reminders.svg",
                li: [],
            },
            {
                name: "Planning",
                id: 4,
                icon: "icon-planning.svg",
                li: [],
            },
        ],
    },
    {
        name: "Company",
        id: 2,
        icon: "",
        li: [
            {
                name: "History",
                id: 1,
                icon: "",
                li: [],
            },
            {
                name: "Our Team",
                id: 2,
                icon: "",
                li: [],
            },
            {
                name: "Blog",
                id: 3,
                icon: "",
                li: [],
            },
        ],
    },
    {
        name: "Career",
        id: 3,
        icon: "",
        li: [],
    },
    {
        name: "About",
        id: 4,
        icon: "",
        li: [],
    },
];

export default menu;
