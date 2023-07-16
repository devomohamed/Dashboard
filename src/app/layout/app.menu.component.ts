import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Users',
                items: [
                    { label: 'Users', icon: 'pi pi-fw pi-users', routerLink: ['/uikit/button']},
                    { label: 'Admins', icon: 'pi pi-fw pi-verified', routerLink: ['/uikit/input'] },
                    // { label: 'Offers', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                    // { label: 'Cobones', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
                    // { label: 'Orders', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
                    // { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    // { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    // { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    // { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    // { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    // { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    // { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
                    // { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    // { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    // { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    // { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            },
            {
                label: 'Products',
                items: [
                    { label: 'Add New Product', icon: 'pi pi-fw pi-cart-plus', routerLink: ['/blocks'], badge: 'NEW' },
                    { label: 'All Products', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
                    { label: 'Brands', icon: 'pi pi-fw pi-megaphone', routerLink: ['/blocks'], badge: 'NEW' },
                    { label: 'Reviews', icon: 'pi pi-fw pi-star-fill', routerLink: ['/blocks'], badge: 'NEW' },
                    // { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
                ]
            },
            {
                label: 'Offers',
                items: [
                    { label: 'All Offers', icon: 'pi pi-fw pi-dollar', routerLink: ['/utilities/icons'] },
                    { label: 'Copones', icon: 'pi pi-fw pi-gift', routerLink: ['/utilities/icons'] },
                    // { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
                ]
            },
            // {
            //     label: 'Copones',
            //     icon: 'pi pi-fw pi-briefcase',
            //     items: [
            //         {
            //             label: 'Copones',
            //             icon: 'pi pi-fw pi-globe',
            //             routerLink: ['/landing']
            //         },
                    // {
                    //     label: 'Auth',
                    //     icon: 'pi pi-fw pi-user',
                    //     items: [
                    //         {
                    //             label: 'Login',
                    //             icon: 'pi pi-fw pi-sign-in',
                    //             routerLink: ['/auth/login']
                    //         },
                    //         {
                    //             label: 'Error',
                    //             icon: 'pi pi-fw pi-times-circle',
                    //             routerLink: ['/auth/error']
                    //         },
                    //         {
                    //             label: 'Access Denied',
                    //             icon: 'pi pi-fw pi-lock',
                    //             routerLink: ['/auth/access']
                    //         }
                    //     ]
                    // },
                    // {
                    //     label: 'Crud',
                    //     icon: 'pi pi-fw pi-pencil',
                    //     routerLink: ['/pages/crud']
                    // },
                    // {
                    //     label: 'Timeline',
                    //     icon: 'pi pi-fw pi-calendar',
                    //     routerLink: ['/pages/timeline']
                    // },
                    // {
                    //     label: 'Not Found',
                    //     icon: 'pi pi-fw pi-exclamation-circle',
                    //     routerLink: ['/notfound']
                    // },
                    // {
                    //     label: 'Empty',
                    //     icon: 'pi pi-fw pi-circle-off',
                    //     routerLink: ['/pages/empty']
                    // },
                // ]
            // },
            {
                label: 'Orders',
                items: [
                    {
                        label: 'Orders', icon: 'pi pi-fw pi-dollar',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-shopping-bag',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                        ]
                    },
                    // {
                    //     label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                    //     items: [
                    //         {
                    //             label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                    //             items: [
                    //                 { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                    //                 { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                    //             ]
                    //         },
                    //         {
                    //             label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                    //             items: [
                    //                 { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                    //             ]
                    //         },
                    //     ]
                    // }
                ]
            },
        ];
    }
}
