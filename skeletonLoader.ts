/* this is a utility function for our custom projects to add skeleton loader. Attribute `[xa-skeleton-loader="true"]` needs to be added directly to element or wrapper.*/ 
export const skeletonLoader = () => {

    return {
        /* You can use optional parameter 'wrapper' to send a Webflow Component and show skeleton loaders only inside that section. */ 
        show: (wrapper?) => {
            const skeletonElements = (wrapper?.getElement() || document).querySelectorAll('[xa-skeleton-loader="true"]');
            skeletonElements.forEach(element => {
                const existingSkeleton = element.querySelector('.skeleton-loader');
                if (!existingSkeleton) {
                    const skeletonDiv = document.createElement('div');
                    skeletonDiv.classList.add("skeleton-loader");
                    const htmlElement = element as HTMLElement;
                    htmlElement.style.position = 'relative';
                    htmlElement.appendChild(skeletonDiv);
                }
            });
        },

        hide: (wrapper?) => {
            /* You can use optional parameter 'wrapper' to send a Webflow Component and hide skeleton loaders only inside that section. */ 
            const skeletonElements = (wrapper?.getElement() || document).querySelectorAll('[xa-skeleton-loader="true"]');
            skeletonElements.forEach(element => {
                const skeletonDiv =  element.querySelector('.skeleton-loader');
                const htmlElement = element as HTMLElement;

                if (skeletonDiv) {
                    htmlElement.removeChild(skeletonDiv);
                }
            });
        }
    }
}
