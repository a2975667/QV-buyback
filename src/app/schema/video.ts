export interface VideoSettings {
    control_panel_can_change: boolean,
    control_panel_freeze: boolean,
    control_panel_has_price: boolean,
    normal: object,
    save: boolean,
    apply: boolean,
}
export interface Video {
    Description: string;
    Title: string,
    filename: boolean,
    settings: VideoSettings,
}