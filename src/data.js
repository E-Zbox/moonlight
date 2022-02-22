import {
    faHouseChimneyCrack,
    faUser,
    faPen,
    faImage,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
    {
        title: "Home",
        href: "home",
        icon: faHouseChimneyCrack,
        selected: true,
    },
    { title: "About", href: "about", icon: faUser, selected: false },
    { title: "Entries", href: "entries", icon: faPen, selected: false },
    { title: "Work", href: "work", icon: faImage, selected: false },
    { title: "Contact", href: "contact", icon: faEnvelope, selected: false },
];

const entriesItems = [
    {
        title: "QUISQUE COMMODO QUAM",
        body: "Vestibulum augue ex, finibus sit amet nisi id, maximus ultrices ipsum. Maecenas rhoncus nibh in mauris lobortis, a maximus diam faucibus. In et eros urna. Suspendisse potenti. Pellentesque commodo, neque nec molestie tempus, purus ante feugiat augue.",
        img: "./assets/first_service.jpg",
    },
    {
        title: "MAECENAS EU PURUS EU SAPIEN",
        body: "Sed vitae felis in lorem mollis mollis eget in leo. Donec commodo, ex nec rutrum venenatis, nisi nisl malesuada magna, sed semper ipsum enim a ipsum. Aenean in ante vel mi molestie bibendum. Quisque sit amet lacus in diam pretium faucibus. Cras vel justo lorem.",
        img: "./assets/second_service.jpg",
    },
    {
        title: "QUISQUE COMMODO QUAM",
        body: "Vestibulum augue ex, finibus sit amet nisi id, maximus ultrices ipsum. Maecenas rhoncus nibh in mauris lobortis, a maximus diam faucibus. In et eros urna. Suspendisse potenti. Pellentesque commodo, neque nec molestie tempus, purus ante feugiat augue.",
        img: "./assets/first_service.jpg",
    },
    {
        title: "MAECENAS EU PURUS EU SAPIEN",
        body: "Sed vitae felis in lorem mollis mollis eget in leo. Donec commodo, ex nec rutrum venenatis, nisi nisl malesuada magna, sed semper ipsum enim a ipsum. Aenean in ante vel mi molestie bibendum. Quisque sit amet lacus in diam pretium faucibus. Cras vel justo lorem.",
        img: "./assets/second_service.jpg",
    },
];

const workItems = [
    {
        title: "Number One",
        body: "Odio saepe, soluta quasi quidem expedita adipisci dignissimos dolores.",
        default_img: "./assets/first_item.jpg",
        large_img: "./assets/first_big_item.jpg",
    },
    {
        title: "Number Two",
        body: "Neque quis quia, iusto rem impedit praesentium assumenda id voluptatibus voluptas, mollitia aliquid! ",
        default_img: "./assets/second_item.jpg",
        large_img: "./assets/second_big_item.jpg",
    },
    {
        title: "Number Three",
        body: "Atque doloribus exercitationem quod iste itaque adipisci reiciendis cum",
        default_img: "./assets/third_item.jpg",
        large_img: "./assets/third_big_item.jpg",
    },
    {
        title: "Number Four",
        body: "Odio saepe, soluta quasi quidem expedita adipisci dignissimos dolores.",
        default_img: "./assets/fourth_item.jpg",
        large_img: "./assets/fourth_big_item.jpg",
    },
    {
        title: "Fifth Item",
        body: "Neque quis quia, iusto rem impedit praesentium assumenda id voluptatibus voluptas, mollitia aliquid! ",
        default_img: "./assets/fifth_item.jpg",
        large_img: "./assets/fifth_big_item.jpg",
    },
    {
        title: "Sixth Item",
        body: "Atque doloribus exercitationem quod iste itaque adipisci reiciendis cum",
        default_img: "./assets/sixth_item.jpg",
        large_img: "./assets/sixth_big_item.jpg",
    },
    {
        title: "Number Seven",
        body: "Fugiat, eaque officia? Sed eos blanditiis ab nostrum maiores reiciendis. . Quam, sint minima!",
        default_img: "./assets/seventh_item.jpg",
        large_img: "./assets/seventh_big_item.jpg",
    },
    {
        title: "Number Eight",
        body: "Odio saepe, soluta quasi quidem expedita adipisci dignissimos dolores.",
        default_img: "./assets/eight_item.jpg",
        large_img: "./assets/eight_big_item.jpg",
    },
    {
        title: "Number Nine",
        body: "Neque quis quia, iusto rem impedit praesentium assumenda id voluptatibus voluptas, mollitia aliquid! ",
        default_img: "./assets/ninth_item.jpg",
        large_img: "./assets/ninth_big_item.jpg",
    },
    {
        title: "Number Ten",
        body: "Fugiat, eaque officia? Sed eos blanditiis ab nostrum maiores reiciendis. . Quam, sint minima!",
        default_img: "./assets/fifth_item.jpg",
        large_img: "./assets/fifth_big_item.jpg",
    },
    {
        title: "Eleventh Item",
        body: "Fugiat, eaque officia? Sed eos blanditiis ab nostrum maiores reiciendis. . Quam, sint minima!",
        default_img: "./assets/first_item.jpg",
        large_img: "./assets/first_big_item.jpg",
    },
    {
        title: "Twelfth Item",
        body: "Neque quis quia, iusto rem impedit praesentium assumenda id voluptatibus voluptas, mollitia aliquid! ",
        default_img: "./assets/second_item.jpg",
        large_img: "./assets/second_big_item.jpg",
    },
];

export { entriesItems, menuItems, workItems };
