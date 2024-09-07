import MarkdownEditor from '@uiw/react-markdown-editor';
import { useEffect } from 'react';
const Help = () => {
    document.documentElement.setAttribute('data-color-mode', 'light')

    let mdStr = `
## My Livestock  Site

### Introduction
This Site is designed to monitor the real-time location, temperature, and CO2 levels of your cattle. All data is displayed on a web interface for easy access and analysis.

### Using the Site
* **Live Tracking:** View the real-time location of your cattle on a map.
* **Vital Signs:** Monitor the temperature and CO2 levels of each animal.
* **Historical Data:** Access past data for analysis and trends.
* **Alerts:** Set up custom alerts for unusual conditions (e.g., high temperature, low CO2).
* **Geofencing:** Define virtual boundaries and receive notifications when cattle leave or enter specific areas.

### Web Interface
* **Dashboard:** Overview of all cattle, including location, temperature, and CO2 levels.
* **Individual Profiles:** Detailed information about each animal, including historical data and graphs.
* **Alerts:** View and manage alerts.
* **Settings:** Account and device management.

### Troubleshooting
* **Device Connectivity:** Ensure the tracking devices have a strong signal.
* **Data Accuracy:** Verify the accuracy of temperature and CO2 sensors.
* **Site Issues:** Check for updates or contact support for assistance.

### Additional Notes
* For optimal performance, ensure your device has a strong internet connection.
* Regularly charge the cattle tracking devices.
* Back up your data regularly.

**We recommend consulting the user manual for detailed instructions and troubleshooting tips.**

**Enjoy using the My Livestock Site!**
    `;

    return (
        <>
            <div className='h-full p-5 overflow-y-auto px-7'>
                <MarkdownEditor.Markdown source={mdStr} height="100%" />
            </div>
        </>
    )
}

export default Help
