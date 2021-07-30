'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">client-database documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddEditModule.html" data-type="entity-link" >AddEditModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddEditModule-46faa1e6b24b3cbc3fc41073d0f28af8"' : 'data-target="#xs-components-links-module-AddEditModule-46faa1e6b24b3cbc3fc41073d0f28af8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddEditModule-46faa1e6b24b3cbc3fc41073d0f28af8"' :
                                            'id="xs-components-links-module-AddEditModule-46faa1e6b24b3cbc3fc41073d0f28af8"' }>
                                            <li class="link">
                                                <a href="components/AddEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ValidationErrorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidationErrorsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddEditRoutingModule.html" data-type="entity-link" >AddEditRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e3eb94fab3f278465e15d31b34e273bc"' : 'data-target="#xs-components-links-module-AppModule-e3eb94fab3f278465e15d31b34e273bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e3eb94fab3f278465e15d31b34e273bc"' :
                                            'id="xs-components-links-module-AppModule-e3eb94fab3f278465e15d31b34e273bc"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-e3eb94fab3f278465e15d31b34e273bc"' : 'data-target="#xs-directives-links-module-AppModule-e3eb94fab3f278465e15d31b34e273bc"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-e3eb94fab3f278465e15d31b34e273bc"' :
                                        'id="xs-directives-links-module-AppModule-e3eb94fab3f278465e15d31b34e273bc"' }>
                                        <li class="link">
                                            <a href="directives/AddEditResolverDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddEditResolverDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientDetailsModule.html" data-type="entity-link" >ClientDetailsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientDetailsModule-66c2dec860b0aeff2d7627f4553365e0"' : 'data-target="#xs-components-links-module-ClientDetailsModule-66c2dec860b0aeff2d7627f4553365e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientDetailsModule-66c2dec860b0aeff2d7627f4553365e0"' :
                                            'id="xs-components-links-module-ClientDetailsModule-66c2dec860b0aeff2d7627f4553365e0"' }>
                                            <li class="link">
                                                <a href="components/ClientDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientDetailsRoutingModule.html" data-type="entity-link" >ClientDetailsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientListModule.html" data-type="entity-link" >ClientListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientListModule-de0ad90109cebe6b6336ab8d04990666"' : 'data-target="#xs-components-links-module-ClientListModule-de0ad90109cebe6b6336ab8d04990666"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientListModule-de0ad90109cebe6b6336ab8d04990666"' :
                                            'id="xs-components-links-module-ClientListModule-de0ad90109cebe6b6336ab8d04990666"' }>
                                            <li class="link">
                                                <a href="components/ClientListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientListRoutingModule.html" data-type="entity-link" >ClientListRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LogoutBtnModule.html" data-type="entity-link" >LogoutBtnModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LogoutBtnModule-60f2d1ded4641077e6721c1e60798bb0"' : 'data-target="#xs-components-links-module-LogoutBtnModule-60f2d1ded4641077e6721c1e60798bb0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LogoutBtnModule-60f2d1ded4641077e6721c1e60798bb0"' :
                                            'id="xs-components-links-module-LogoutBtnModule-60f2d1ded4641077e6721c1e60798bb0"' }>
                                            <li class="link">
                                                <a href="components/LogoutBtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutBtnComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReusableCardModule.html" data-type="entity-link" >ReusableCardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReusableCardModule-3fbf99b2603ab8d986b2bd1661379bd9"' : 'data-target="#xs-components-links-module-ReusableCardModule-3fbf99b2603ab8d986b2bd1661379bd9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReusableCardModule-3fbf99b2603ab8d986b2bd1661379bd9"' :
                                            'id="xs-components-links-module-ReusableCardModule-3fbf99b2603ab8d986b2bd1661379bd9"' }>
                                            <li class="link">
                                                <a href="components/ReusableCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReusableCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ClientCrudService.html" data-type="entity-link" >ClientCrudService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/DataResolverService.html" data-type="entity-link" >DataResolverService</a>
                            </li>
                            <li class="link">
                                <a href="guards/UnsavedChangesGuard.html" data-type="entity-link" >UnsavedChangesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IClient.html" data-type="entity-link" >IClient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IClientAcc.html" data-type="entity-link" >IClientAcc</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});