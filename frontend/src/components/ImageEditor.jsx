import { useState } from 'react';
import React from 'react'; // Add this line!
// import { theme } from "../ImageEditorTheme";
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import FilerobotImageEditor, {
    TABS,
    TOOLS,
} from 'react-filerobot-image-editor';
import { motion, AnimatePresence } from "framer-motion";

export default function ImageEditor({ source, setOpen, setIndex, setEditedImageUrl, onSuccess }) {


    const modernFireTheme = {
        palette: {
            // Canvas & Workspace (Deepest Red)
            // 'bg-primary': 'radial-gradient(circle at top left, #fbff00, #ff0000)',        // Near-black red for focus
            'bg-secondary': '#ffff',      // Sidebar and header panels
            'bg-primary-active': 'radial-gradient(circle at top left, #fbff00, #ff0000)', // Hover effects on tools

            // Interactions (The "Glowing" Yellow)
            // 'accent-primary': '#ffcc00',      // THE SAVE BUTTON & Main Sliders
            'accent-primary-active': '#ffff',// Hover state for primary actions
            'accent-primary-disabled': '#332b00',

            // Icons & Text
            // 'icons-primary': '#ffcc00',       // Main tool icons
            'icons-secondary': '#c6e00',     // Inactive tool icons
            'text-primary': '#ffffff',        // High-readability white
            'text-secondary': '#ffcc00',      // Yellow labels for emphasis

            // Modern Borders (Subtle Crimson)
            'borders-primary': '#2d0a0a',     // Panel dividers
            'borders-strong': '#ffcc00',      // Active focus borders
        },
        typography: {
            fontFamily: "'Poppins', 'Segoe UI', sans-serif", // Modern clean sans-serif
            letterSpacing: '0.02em',
        },
    };
    const googleStyleTheme = {
        palette: {
            'bg-primary': '#FFF8E1',            // soft yellow background
            'bg-primary-active': '#FFE082',     // active yellow highlight
            'bg-secondary': '#FFEBEE',          // light red secondary background

            // Buttons (Save, Add Watermark, etc.)
            'accent-primary': '#F44336',        // button background (Google red)
            'accent-primary-active': '#D32F2F', // button hover/active background
            'text-primary': '#FFFFFF',          // button text color
            'text-secondary': '#212121',        // secondary text (labels, menus)

            // Icons and borders
            'icons-primary': '#F44336',
            'icons-secondary': '#FF9800',
            'borders-primary': '#F44336',
            'borders-secondary': '#FF9800',
            'borders-strong': '#BF360C',

            // Shadows and warnings
            'light-shadow': '#FFD54F',
            'warning': '#FF5722',
        },
        typography: {
            fontFamily: 'Roboto, Arial, sans-serif',
        },
        components: {
            button: {
                borderRadius: '12px',   // increase roundness of all buttons
                padding: '8px 16px',    // optional: adjust spacing
                fontWeight: 500,        // keep Google-style boldness
            },
            menuButton: {
                borderRadius: '16px',   // specifically for menu buttons
            },
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0.8, y: 15, transition: { duration: .5 } }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15, transition: { duration: .5 } }}
            className="fixed w-full h-screen p-8">

            <FilerobotImageEditor
                source={source}
                onSave={(editedImageObject) => { //, designState // console.log(editedImageObject);
                    onSuccess(editedImageObject.imageBase64, editedImageObject.fullName, editedImageObject.extension);
                    setOpen(false);
                    setIndex(null);
                }
                }
                // theme={modernFireTheme}
                onClose={() => { setOpen(false); setIndex(null); }}
                annotationsCommon={{
                    fill: '#ff0000',
                }}
                // theme={googleStyleTheme}
                Text={{ text: 'Filerobot...' }}
                Rotate={{ angle: 90, componentType: 'slider' }}
                Crop={{
                    presetsItems: [
                        {
                            titleKey: 'classicTv',
                            descriptionKey: '4:3',
                            ratio: 4 / 3,
                            // icon: CropClassicTv, // optional, CropClassicTv is a React Function component. Possible (React Function component, string or HTML Element)
                        },
                        {
                            titleKey: 'cinemascope',
                            descriptionKey: '21:9',
                            ratio: 21 / 9,
                            // icon: CropCinemaScope, // optional, CropCinemaScope is a React Function component.  Possible (React Function component, string or HTML Element)
                        },
                    ],
                    presetsFolders: [
                        {
                            titleKey: 'socialMedia', // will be translated into Social Media as backend contains this translation key
                            // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
                            groups: [
                                {
                                    titleKey: 'facebook',
                                    items: [
                                        {
                                            titleKey: 'profile',
                                            width: 180,
                                            height: 180,
                                            descriptionKey: 'fbProfileSize',
                                        },
                                        {
                                            titleKey: 'coverPhoto',
                                            width: 820,
                                            height: 312,
                                            descriptionKey: 'fbCoverPhotoSize',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                }}
                tabsIds={[
                    TABS.ADJUST,    // Crop, Rotate, Flip
                    TABS.ANNOTATE,  // Text, Shapes, Drawing, Watermark
                    TABS.FILTERS,   // Pre-made color presets
                    TABS.FINETUNE,  // Brightness, Contrast, HSV, Blur, Warmth
                    TABS.RESIZE,    // Specific pixel dimension changes
                    TABS.WATERMARK
                ]} defaultTabId={TABS.ANNOTATE} // or 'Annotate'
                defaultToolId={TOOLS.TEXT} // or 'Text'
            />

        </motion.div>
    );
}

