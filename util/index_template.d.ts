// Type definitions for Ion.RangeSlider 11.1.0
// Project: https://github.com/IonDen/ion.rangeSlider/
// Definitions by: Karel van de Plassche <https://github.com/Karel-van-de-Plassche/>
// TypeScript Version: 2.8.3

// API documentation: http://ionden.com/a/plugins/ion.rangeSlider/en.html

// Based on global-modifying module template file

declare global {
    interface JQuery {
        destroy(): void;
        ionRangeSlider(): JQuery;
        ionRangeSlider(options: IonRangeSliderOptions): JQuery;
        reset(): void;
        update(option: IonRangeSliderOptions): void;
    }
}

export interface IonRangeSliderOptions {
    // Put options here
}

interface IonRangeSliderEvent {
    // Put callback here
}
