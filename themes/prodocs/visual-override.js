/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {   
    let output = '';
    
    if(params.minFontSize !== '1' || params.maxFontSize !== '1') {
        output += `
        html {
          font-size: ${params.minFontSize}rem;
        }

        @media screen and (min-width: 20rem) {
          html {
               font-size: calc(${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 127));
          }
        }

        @media screen and (min-width: 147rem) {
          html {
               font-size: ${params.maxFontSize}rem;
            }
        }`;
    }
	
    if(params.codeMaxHeight !== '30rem') {
        output += ` 
         pre {   
               max-height: ${params.codeMaxHeight};
        }`;
    }

    if(params.primaryColor !== '30rem') {
      output += ` 
      input[type=checkbox]:checked + label:before,
      input[type=radio]:checked + label:before {
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 8'%3e%3cpolygon points='9.53 0 4.4 5.09 1.47 2.18 0 3.64 2.93 6.54 4.4 8 5.87 6.54 11 1.46 9.53 0' fill='${params.primaryColor.replace('#', '%23')}'/%3e%3c/svg%3e");      
      }
           
      input[type=radio]:checked + label:before {
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3ccircle cx='4' cy='4' r='4' fill='${params.primaryColor.replace('#', '%23')}'/%3e%3c/svg%3e");
      }

      select:not([multiple]) {
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6"><polygon points="3 6 3 6 0 0 6 0 3 6" fill="${params.primaryColor.replace('#', '%23')}"/></svg>') no-repeat 90% 50%;  
      }`;
  }
    
    if (params.galleryItemGap !== '0.26667rem') {
        output += `
        .gallery {
               margin: 2.66667rem -${params.galleryItemGap};
        }
        .gallery__item {
               padding: ${params.galleryItemGap};
        }
        
        .gallery__item a::after {
               bottom: ${params.galleryItemGap};
               height: calc(100% - ${params.galleryItemGap} * 2);              
               left: ${params.galleryItemGap};
               right: ${params.galleryItemGap};
               top: ${params.galleryItemGap};
               width: calc(100% - ${params.galleryItemGap} * 2);  
        }`;
    }

    if(params.galleryZoom !== true) {
            output += `   
            .pswp--zoom-allowed .pswp__img {
            cursor: default !important  
            }`;    	 
      }
    
    if(params.createSearchPage) {
        output += ` 
         .page--search table { 
               border: none;
               margin: 0;
         }

         .page--search table td { 
               border: none;
               padding: 0;
         }

         .gsc-above-wrapper-area-container,
         .gsc-table-result {
               display: inline-table;
               margin-top: 0;
               white-space: normal;
         }

         .cse .gsc-control-cse, .gsc-control-cse {              
               padding: 0 !important;
         }

         .gsc-thumbnail-inside,
         .gsc-url-top {
               padding: 0 !important;
         }

         .gsc-control-cse, .gsc-control-cse .gsc-table-result {
               font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;  
               font-size: 0.8888rem !important;
         }

         .gs-title  {       
               font-size: 1rem!important; 
               font-weight: bold;
               height: auto !important; 
               margin-bottom: 0.26667rem;
               text-decoration: none !important; 
               text-align: left;
         }

         .gsc-url-top {
                font-size: 0.7242rem;
         }

         .gsc-result{
               border-bottom: 1px solid #E3E3E3 !important; 
               padding: calc(1.13332rem + .5vw) 0 !important; 
 
        }`;    	 
    }	

    if(params.docSearch) {
      output += ` 
      :root {
            --docsearch-primary-color: ${params.primaryColor} !important; 
      }
      .DocSearch-Container {
            z-index: 2000 !important;
      }
      .DocSearch-Cancel {
            width: auto !important;
            background: var(--primary-color) !important;
            border: none;
            border-radius: 2px !important;
            -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
                  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
            color: var(--white) !important;
            cursor: pointer!important;
            font-size: 0.8239746086rem!important;
            font-weight: var(--font-weight-bold) !important;
            letter-spacing: 0.03em !important;
            padding: 0.6666666667rem 1.3333333333rem !important;
      }
      #docsearch {
            width: 100%;
      }
      .DocSearch-Button {
             background: transparent !important;
             border: none !important;
             box-shadow: none !important;
             height: 43px !important;
             margin-left: 0 !important;
             width: 100% !important;
             transform: none !important;
      }`;    	 
   }	

    if(params.lazyLoadEffect === 'fadein') {
        output += ` 
         img[loading] {
               opacity: 0;
         }

         img.is-loaded {
               opacity: 1;
               transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1); 
         }`;    	 
    } 

    return output;
}

module.exports = generateOverride;
