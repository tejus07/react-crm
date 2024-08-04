import {Badge} from "@/components/ui/badge";

export function SideBar() {
    return (
        <div className="relative w-20 flex flex-col items-center space-y-4 py-4 custom-background bordery">
            <div className="relative flex w-full justify-center items-center cursor-pointer py-4">
                <Badge className="absolute rotate-90 left-0 pill"></Badge>
                <svg className="text-primary"
                     height="20px"
                     width="20px"
                     viewBox="0 0 16 16"
                     xmlns="http://www.w3.org/2000/svg"
                     enableBackground="new 0 0 16 16"
                >
                    <path fill="currentColor"
                          d="M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z"/>
                </svg>
            </div>
            <div className="relative flex w-full justify-center items-center cursor-pointer py-4">
                <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                >
                    <defs>
                        <style>
                            {`.cls-1,.cls-2{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:2px;}.cls-2{stroke-linecap:round;}`}
                        </style>
                    </defs>
                    <rect className="cls-1" height="46" rx="4" ry="4" transform="translate(48 48) rotate(180)"
                          width="46" x="1" y="1"/>
                    <rect className="cls-2" height="22" width="7" x="4" y="22"/>
                    <rect className="cls-2" height="16" width="7" x="15" y="28"/>
                    <rect className="cls-2" height="25" width="7" x="26" y="19"/>
                    <rect className="cls-2" height="21" width="7" x="37" y="23"/>
                    <circle className="cls-2" cx="7" cy="14" r="2"/>
                    <circle className="cls-2" cx="19" cy="20" r="2"/>
                    <circle className="cls-2" cx="30" cy="11" r="2"/>
                    <circle className="cls-2" cx="41" cy="15" r="2"/>
                    <line className="cls-2" x1="9" x2="17" y1="15" y2="19"/>
                    <line className="cls-2" x1="21" x2="28" y1="19" y2="12"/>
                    <line className="cls-2" x1="32" x2="39" y1="12" y2="14"/>
                </svg>
            </div>
            <div className="relative flex w-full justify-center items-center cursor-pointer py-4">
                <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                >
                    <g>
                        <g>
                            <g>
                                <path fill="currentColor"
                                      d="M118.6,10.8c-7.1,2.5-11.8,8.4-12.6,15.9l-0.3,3h-4.4c-10.3,0-17,3.6-20.5,11.2c-1.4,2.9-1.5,3.8-1.5,8.2c0,4.3,0.2,5.4,1.4,7.9c1.9,4,4.6,6.9,8.4,9l3.3,1.8h35.4h35.4l3-1.5c3.8-1.9,7.9-6.2,9.3-10.1c1.5-3.9,1.5-10.2,0.1-14c-1.4-3.7-3.4-6.5-6.2-8.6c-4-2.9-6.5-3.6-13.2-3.9l-6.1-0.2l-0.3-3.3c-0.2-1.8-0.8-4.4-1.4-5.7c-1.5-3.4-5.3-7.2-8.9-9.1c-2.9-1.4-3.5-1.5-10.7-1.6C122.6,9.9,120.8,10.1,118.6,10.8z M135.8,21.1c3.3,2.2,4.1,4.1,4.1,9.4c0,5,0.8,7.8,2.5,8.8c0.6,0.4,4.4,0.6,9.1,0.6c6.7,0,8.4,0.2,10.2,1c3.1,1.4,4.6,3.8,4.8,7.7c0.3,4-1.1,6.9-4.1,8.6c-1.9,1.1-2.4,1.1-34.6,1.1c-36,0-34.4,0.2-37-3.4c-2.7-3.5-2.4-8.5,0.6-11.8c2.4-2.7,4.1-3.1,13.4-3.1h7.8l1.5-1.5c1.5-1.5,1.5-1.7,1.5-6.5c0-5.6,1-8.5,3.5-10.2c2.3-1.6,2.6-1.6,8.9-1.7C133.4,19.9,134.2,20,135.8,21.1z"/>
                                <path fill="currentColor"
                                      d="M125.5,28.5c-1.8,1.7-1.7,4,0.1,5.5c2.3,1.8,4.5,1.3,5.9-1.4c0.5-1,0.5-1.6,0-2.8C130.3,26.9,127.6,26.4,125.5,28.5z"/>
                                <path fill="currentColor"
                                      d="M43.9,31.6c-3.9,2.7-3.6-6.7-3.6,106.7v101.7l1.2,1.7c0.6,0.9,1.8,2.3,2.6,2.8l1.5,1.1l81.6,0.2l81.6,0.1l2.3-1.1c1.4-0.6,2.8-1.9,3.5-3l1.2-1.9V138.2c0-101.7,0-101.8-1.1-103.6c-0.6-1-1.8-2.4-2.8-3c-1.7-1.2-2-1.2-16.6-1.2h-14.8l1.8,2.7c2,3,3.7,7.5,4.2,11.2l0.4,2.4h6.2h6.2v91.3v91.3h-71.4H56.5l0.1-91.2l0.2-91.1l6.1-0.2l6.1-0.2l0.6-3c0.8-4.3,2.4-8,4.1-10.5c0.9-1.2,1.6-2.3,1.6-2.4s-6.7-0.3-14.8-0.3H45.8L43.9,31.6z"/>
                                <path fill="currentColor"
                                      d="M158.4,114.2c-1.3,0.6-7.6,8-21.5,25.4C126,153.1,117,164,116.8,164c-0.2-0.1-3.3-3.5-7-7.7c-7.3-8.2-8.9-9.3-12.7-8.8c-5.5,0.6-8.8,6.3-6.3,11c1,1.8,20.6,23.8,22.3,24.9c0.7,0.5,2.3,1,3.5,1.1c4.4,0.5,4.7,0.2,29.9-31.2c25.8-32,25.1-31,23-35.5C167.4,113.8,162.4,112.1,158.4,114.2z"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="relative flex w-full justify-center items-center cursor-pointer py-4">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 256 256"
                    enableBackground="new 0 0 256 256"
                    xmlSpace="preserve"
                    width="24px"
                    height="24px"
                >
                    <path fill="currentColor"
                          d="M218.3,41.5H37.7C22.5,41.5,10,53.9,10,69.2v117.5c0,15.3,12.5,27.7,27.7,27.7h180.5c15.3,0,27.7-12.4,27.7-27.7V69.2C246,53.9,233.5,41.5,218.3,41.5z M218.3,206H37.7c-10.6,0-19.3-8.6-19.3-19.3V69.2c0-10.6,8.6-19.3,19.3-19.3h180.5c10.6,0,19.3,8.6,19.3,19.3v30.4h-86.4c-15.3,0-27.7,12.4-27.7,27.7v5.8c0,15.3,12.5,27.7,27.7,27.7h86.4v25.8C237.5,197.4,228.9,206,218.3,206z M237.5,108.1v44.3h-86.3c-10.6,0-19.3-8.6-19.3-19.3v-5.8c0-10.6,8.6-19.3,19.3-19.3L237.5,108.1L237.5,108.1z"/>
                    <path fill="currentColor"
                          d="M205,143c6.9,0,12.5-5.6,12.5-12.5c0-6.9-5.6-12.5-12.5-12.5c-6.9,0-12.5,5.6-12.5,12.5C192.5,137.3,201.8,143,205,143z"/>
                </svg>
            </div>
            <div className="relative flex w-full justify-center items-center cursor-pointer py-4">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 256 256"
                    enableBackground="new 0 0 256 256"
                    xmlSpace="preserve"
                    width="24px"
                    height="24px"
                >
                    <g>
                        <path fill="currentColor"
                              d="M116.3,10.7c-12.1,3.1-26,14.5-31,25.7c-3,6.4-5,15.2-5,21.9v4.1L67,62.9c-11.6,0.3-13.5,0.7-15.5,2.7c-2.1,2.1-2.8,8-9.4,85c-4,45.5-7.2,84.5-7.2,86.7c0,2.6,0.8,4.6,2.5,6.3l2.5,2.4h87.8h87.9l2.5-2.8l2.7-2.8l-7.4-85.6c-4-46.9-7.8-86.5-8.5-87.8c-1.9-3.5-5.6-4.4-18.3-4.4h-11.5v-4.2c0-6.8-3.1-18.8-6.2-24.5c-4.2-7.6-13.4-16-22.1-20.1c-6-2.8-8.9-3.4-16.8-3.8C124.9,9.8,118.7,10.2,116.3,10.7z M140.1,29.3c10.3,4.5,17.5,15.6,17.5,27v6.4h-29.8H98v-6C98,34.6,119.9,20.3,140.1,29.3z M80.5,91.5c0.3,10.2,0.6,11.4,3,13.3c3,2.4,7.5,2.7,10.3,0.6c3-2.2,4.2-6.8,4.2-16.2v-8.7h29.8h29.8v9.4c0,10.7,1.8,15.6,6.1,16.7c8.2,2.1,11.6-2.9,11.6-16.7v-9.4h7.5h7.5l5.9,69.3c3.2,38.2,6.2,71.7,6.4,74.6l0.7,5.3h-75.3c-61.2,0-75.2-0.2-75.2-1.4c0-0.8,2.8-33.4,6.1-72.3c3.3-39,6.1-71.9,6.1-73.1c0-2,0.8-2.2,7.6-2.2h7.6L80.5,91.5z"/>
                        <path fill="currentColor"
                              d="M125.6,118.9c0,5.3,0,5.3-4.1,6.1c-5.6,0.9-11.8,5.2-14,9.8c-2.3,5-2.3,14.3,0.1,19.2c2.1,4.5,8.9,9.3,18.2,12.7c8.8,3.2,11.9,6.3,11.9,11.9c0,6.1-2.9,8.8-9.3,8.8c-6.1,0-10.1-3-11-8.3l-0.8-3.9H110c-7.6,0-8.4,0.9-6.5,7.5c2.1,8.1,11,15.6,18.6,15.7c2.1,0,2.4,0.6,2.4,5c0,5,0,5,3.9,5s3.9,0,3.9-4.9c0-4.8,0.1-4.9,4.2-5.5c11.6-1.9,18.8-13.3,15.7-24.9c-1.9-7-7-11.7-17.1-16c-11.5-5-14.9-8-14.9-13.3c0-5.3,3.1-8.4,8.6-8.4c5.1,0,9.1,3.5,9.1,8.1c0,3,0.1,3,7.2,3h7.2v-3.9c0-2.2-0.8-5.4-1.5-7.1c-2.4-4.6-8.9-9.8-13.4-10.7c-3.8-0.7-3.9-0.8-3.9-6.1v-5.4h-3.9h-3.9L125.6,118.9L125.6,118.9z"/>
                    </g>
                </svg>

            </div>
            <div className="relative flex w-full justify-center items-end cursor-pointer py-4 flex-1">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                     y="0px" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" xmlSpace="preserve" height="24px"
                     width="24px">
                    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon</metadata>
                    <g>
                        <g>
                            <path fill="currentColor"
                                  d="M186.4,163.8l11.9,11.9L246,128l-47.7-47.7l-11.9,11.9l27.3,27.3H94.3v16.9h119.4L186.4,163.8z"/>
                            <path
                                fill="currentColor"
                                d="M199.4,199.5c-19.1,19.1-44.5,29.6-71.5,29.6s-52.4-10.5-71.5-29.6C37.2,180.4,26.9,155,26.9,128s10.4-52.4,29.5-71.5c19.1-19.1,44.5-29.6,71.5-29.6s52.4,10.5,71.5,29.6c1.3,1.3,2.6,2.7,3.9,4.1h21.5C203.4,30,168,10,127.9,10C62.7,10,10,62.8,10,128c0,65.2,52.7,118,117.9,118c40.1,0,75.5-20,96.8-50.6h-21.5C202,196.8,200.7,198.2,199.4,199.5z"/>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}