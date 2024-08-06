import CircularProgressBar from "@/components/CircularProgressBar.tsx";


export function DashBoard() {
    return (
        <>
            <div className="row flex-row p-6">
                <div className="text-2xl font-bold ml-2">Dashboard
                </div>
            </div>
            <div className="row flex flex-row px-6">
                <div className="col w-7/12 flex flex-row">
                    <div className="custom-background flex flex-col p-4 m-2 w-1/4 rounded">
                        <div className="h-10 w-10 total-orders-bg rounded-lg relative">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                 version="1.1" x="0px" y="0px" viewBox="0 0 256 256" enableBackground="new 0 0 256 256"
                                 xmlSpace="preserve">
                                <g>
                                    <g>
                                        <g>
                                            <path fill="#4163ff"
                                                  d="M98.2,62.2c-1.1,0.6-4.9,5.7-13,17.6L73.8,96.6L71,96.9c-7.5,0.7-13,7-13,14.9c0,4.2,0.9,6.7,3.7,10l1.8,2.2l4.4,26.3c2.4,14.5,4.6,27.2,4.9,28.3c0.7,2.6,3.3,5.5,5.6,6.2c1.3,0.4,17.2,0.5,49.7,0.4l47.7-0.2l1.9-1.5c1.1-0.8,2.3-2.3,2.7-3.2c0.4-0.9,2.8-14,5.3-29.1l4.6-27.4l1.7-2.1c2.5-2.9,3.5-5.4,3.8-9.1c0.5-8-5-14.9-12.9-15.9l-3.1-0.4l-11-16.1c-6-8.8-11.5-16.6-12.1-17.2c-3.5-3.8-10.7,0-9.6,5.1c0.2,0.8,4.3,7.4,9.3,14.6c4.9,7.2,8.9,13.2,8.9,13.5c0,0.2-17.4,0.4-38.8,0.4c-30.8,0-38.7-0.2-38.4-0.7c0.2-0.3,4.4-6.5,9.3-13.6c7.9-11.6,8.8-13.2,8.8-15.2C106.4,63,102,60.3,98.2,62.2z M95.1,128.5l1.8,1.8v21.1c0,17.9-0.1,21.4-0.8,22.7c-0.9,1.7-3.2,3.2-5.1,3.2c-1.7,0-4.6-1.9-5.2-3.5c-0.7-1.9-0.7-42.6,0.1-44.1c1-2,2.7-3,5.2-3C93,126.7,93.7,127.1,95.1,128.5z M118.1,127.3c2.5,1.4,2.6,2.2,2.6,25v21.4l-1.5,1.5c-0.8,0.8-2.1,1.7-2.9,1.9c-2.2,0.5-5.2-0.8-6.3-2.9c-0.8-1.7-0.9-3.6-0.8-23.1l0.2-21.3l1.7-1.5C112.9,126.6,116,126.2,118.1,127.3z M142.2,127.6c2.6,1.8,2.7,3,2.7,24.2c0,21.1-0.1,22-2.6,24.2c-0.8,0.7-1.9,1.1-3.4,1.1c-2.6,0-4.2-1.2-5.3-3.8c-0.9-2.1-1.1-39.2-0.2-42.4c0.3-1.1,1.2-2.4,1.9-3.1C136.9,126.5,140.4,126.4,142.2,127.6z M166.6,128.3l1.7,1.5l0.2,21.5c0.1,20.6,0.1,21.5-0.9,23.2c-2.1,3.4-7,3.5-9.5,0.3c-1-1.3-1.1-2.2-1.1-22.6c0-14.6,0.2-21.7,0.6-22.4C159.3,126.4,163.7,125.7,166.6,128.3z"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="text-xs mt-2 opacity-75	">Total Orders</div>
                        <div className="flex justify-between items-baseline">
                            <div className="text-2xl font-bold">75</div>
                            <div className="text-xs font-bold flex flex-row items-center green-text opacity-85">
                                <div className="h-3 w-3 mr-1.5 green-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         version="1.1" x="0px" y="0px" viewBox="0 0 256 256"
                                         enableBackground="new 0 0 256 256" xmlSpace="preserve">
                                        <script/>
                                        <g>
                                            <g>
                                                <path fill="#00cc8e"
                                                      d="M246,179.6c0,4-1.4,7.5-4.4,10.4c-2.9,2.9-6.4,4.4-10.4,4.4H24.8c-4,0-7.5-1.4-10.4-4.4c-2.9-2.9-4.4-6.4-4.4-10.4c0-4,1.5-7.5,4.4-10.4L117.6,66c2.9-2.9,6.4-4.4,10.4-4.4c4,0,7.5,1.4,10.4,4.4l103.3,103.3C244.6,172.1,246,175.6,246,179.6z"/>
                                            </g>
                                        </g>
                                        <script/>
                                    </svg>
                                </div>
                                3%
                            </div>
                        </div>
                    </div>
                    <div className="custom-background flex flex-col p-4 m-2 w-1/4 rounded">
                        <div className="h-10 w-10 total-delivered-bg rounded-lg relative">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                 version="1.1" x="0px" y="0px" viewBox="0 0 256 256" enableBackground="new 0 0 256 256"
                                 xmlSpace="preserve">
                                <script/>
                                <g>
                                    <g>
                                        <path fill="#00c98d"
                                              d="M226.4,98.9c0-9.9-7.8-17.2-16.5-17.2h-33.1V61.3c0-14-4.8-26.8-14.1-36.3c-9-9.6-21.4-15-34.6-15c-26.8,0-48.7,22.9-48.7,51.3v20.4H46.2c-9.3,0-16.5,8-16.5,17.2l-7.8,129.3v0.3c0,9.9,7.5,17.5,16.5,17.5h178.7c9.3,0,16.5-8,16.5-17.5l0.6-0.3L226.4,98.9L226.4,98.9z M84.6,128c-5.3,0-9.7-4.4-9.7-9.8c0-5.4,4.3-9.8,9.7-9.8c5.3,0,9.7,4.4,9.7,9.8C94.2,123.6,89.9,128,84.6,128L84.6,128z M159.6,82H96.4V61.6c0-18.5,14.1-33.1,31.6-33.1c17.4,0,31.6,15,31.6,33.1V82L159.6,82z M171.5,128c-5.3,0-9.7-4.4-9.7-9.8c0-5.4,4.3-9.8,9.7-9.8c5.3,0,9.7,4.4,9.7,9.8C181.1,123.6,176.8,128,171.5,128z"/>
                                    </g>
                                </g>
                                <script/>
                            </svg>
                        </div>
                        <div className="text-xs mt-2 opacity-75	"> Total Delivered</div>
                        <div className="flex justify-between items-baseline">
                            <div className="text-2xl font-bold">70</div>
                            <div className="text-xs font-bold flex flex-row items-center red-text opacity-85">
                                <div className="h-3 w-3 mr-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         version="1.1" x="0px" y="0px" viewBox="0 0 256 256"
                                         enableBackground="new 0 0 256 256" xmlSpace="preserve">
                                        <script/>
                                        <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon</metadata>
                                        <g>
                                            <g>
                                                <path fill="#e35553"
                                                      d="M246,76.4c0,4-1.5,7.4-4.4,10.4L138.4,190c-2.9,2.9-6.4,4.4-10.4,4.4c-4,0-7.4-1.5-10.4-4.4L14.4,86.8c-2.9-2.9-4.4-6.4-4.4-10.4c0-4,1.5-7.4,4.4-10.4c2.9-2.9,6.4-4.4,10.4-4.4h206.5c4,0,7.4,1.5,10.4,4.4C244.5,68.9,246,72.4,246,76.4z"/>
                                            </g>
                                        </g>
                                        <script/>
                                    </svg>
                                </div>
                                3%
                            </div>
                        </div>
                    </div>
                    <div className="custom-background flex flex-col p-4 m-2 w-1/4 rounded">

                        <div className="h-10 w-10 total-cancelled-bg rounded-lg relative">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                 version="1.1" x="0px" y="0px" viewBox="0 0 256 256"
                                 enableBackground="new 0 0 256 256"
                                 xmlSpace="preserve">
                                <script/>
                                <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon</metadata>
                                <g>
                                    <g>
                                        <path fill="#f25e5e"
                                              d="M226.4,98.9c0-9.9-7.8-17.2-16.5-17.2h-33.1V61.3c0-14-4.8-26.8-14.1-36.3c-9-9.6-21.4-15-34.6-15c-26.8,0-48.7,22.9-48.7,51.3v20.4H46.2c-9.3,0-16.5,8-16.5,17.2l-7.8,129.3v0.3c0,9.9,7.5,17.5,16.5,17.5h178.7c9.3,0,16.5-8,16.5-17.5l0.6-0.3L226.4,98.9L226.4,98.9z M84.6,128c-5.3,0-9.7-4.4-9.7-9.8c0-5.4,4.3-9.8,9.7-9.8c5.3,0,9.7,4.4,9.7,9.8C94.2,123.6,89.9,128,84.6,128L84.6,128z M159.6,82H96.4V61.6c0-18.5,14.1-33.1,31.6-33.1c17.4,0,31.6,15,31.6,33.1V82L159.6,82z M171.5,128c-5.3,0-9.7-4.4-9.7-9.8c0-5.4,4.3-9.8,9.7-9.8c5.3,0,9.7,4.4,9.7,9.8C181.1,123.6,176.8,128,171.5,128z"/>
                                    </g>
                                </g>
                                <script/>
                            </svg>
                        </div>

                        <div className="text-xs mt-2 opacity-75	"> Total Cancelled</div>
                        <div className="flex justify-between items-baseline">
                            <div className="text-2xl font-bold">05</div>
                            <div className="text-xs font-bold flex flex-row items-center green-text opacity-85">
                                <div className="h-3 w-3 mr-1.5 green-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         version="1.1" x="0px" y="0px" viewBox="0 0 256 256"
                                         enableBackground="new 0 0 256 256" xmlSpace="preserve">
                                        <script/>
                                        <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon</metadata>
                                        <g>
                                            <g>
                                                <path fill="#00cc8e"
                                                      d="M246,179.6c0,4-1.4,7.5-4.4,10.4c-2.9,2.9-6.4,4.4-10.4,4.4H24.8c-4,0-7.5-1.4-10.4-4.4c-2.9-2.9-4.4-6.4-4.4-10.4c0-4,1.5-7.5,4.4-10.4L117.6,66c2.9-2.9,6.4-4.4,10.4-4.4c4,0,7.5,1.4,10.4,4.4l103.3,103.3C244.6,172.1,246,175.6,246,179.6z"/>
                                            </g>
                                        </g>
                                        <script/>
                                    </svg>
                                </div>
                                3%
                            </div>
                        </div>
                    </div>
                    <div className="custom-background flex flex-col p-4 m-2 w-1/4 rounded">
                        <div className="h-10 w-10 total-revenue-bg rounded-lg relative">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                 version="1.1" x="0px" y="0px" viewBox="0 0 256 256"
                                 enableBackground="new 0 0 256 256" xmlSpace="preserve">
                                <script/>
                                <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon</metadata>
                                <g>
                                    <g>
                                        <g>
                                            <path fill="#e5429f"
                                                  d="M116.8,10.4c-29.5,3-56.1,16.4-76,38.1C12.1,79.8,2.6,124.5,16,164.9c5.9,17.9,14.9,32.5,28.3,46.1c18.8,19,41.7,30.4,69.3,34.3c5.4,0.8,23.6,0.8,29.1,0c27.6-3.9,50.5-15.3,69.3-34.3c18.5-18.7,29.6-41.4,33.5-68.5c0.8-5.4,0.8-23.6,0-29.1c-3.2-22.6-11.5-42.3-24.9-59.1c-6.8-8.5-17.4-18.3-26-24.1c-15-10.1-31.2-16.4-49.8-19.2C138.9,10.2,122.7,9.7,116.8,10.4z M135,60.6V67l2.9,0.6c13.6,2.6,23.2,11.4,27.3,25.2c0.2,0.9-0.6,1.3-9.2,4.8c-5.2,2.1-9.6,3.8-9.6,3.7c0-0.1-1-2-2.1-4.3c-2.5-5.4-6.4-9.4-10.2-10.7c-3.1-1.1-8.3-1.1-10.7,0c-2.3,1-5.4,3.8-6.6,6c-1.4,2.7-1.4,8.1,0,10.8c1.8,3.4,4.9,5.2,17.6,10c12.5,4.8,20.3,8.8,24.3,12.5c5.8,5.4,8.8,11.2,9.9,19.2c1,7.2-0.3,14.8-3.6,21.7c-1.8,3.6-2.7,5-6.1,8.4c-3.4,3.3-4.7,4.3-8.4,6.1c-3.9,1.9-8.6,3.3-13.9,4.2l-1.8,0.3v8.3v8.3h-6.9h-6.9v-8.3v-8.3l-3-0.5c-8.6-1.5-14.4-4.4-20.1-10.2c-3.5-3.6-4.3-4.7-6.5-9.3c-1.4-2.9-3-6.7-3.4-8.6l-0.9-3.3l1.4-0.5c3.7-1.2,19.8-5.2,20-5c0.1,0.1,0.5,1.4,0.9,2.9c1.7,6.5,5.1,10.8,10.2,13.2c3,1.4,3.4,1.5,8.9,1.5c5.4,0,6-0.1,8.4-1.3c4.5-2.2,6.9-6.3,6.9-11.9c0-3.6-1.2-6.7-3.5-8.5c-2.2-1.7-9.4-4.9-16.9-7.6c-8.2-2.9-16.9-7.1-20.3-9.6c-9.3-7-13.8-19.8-11.4-32.4c2.4-12.7,10-21.6,21.4-25.2c2.5-0.8,5.3-1.6,6.3-1.7l1.7-0.3v-6.4v-6.5h6.9h6.9V60.6L135,60.6z"/>
                                        </g>
                                    </g>
                                </g>
                                <script/>
                            </svg>
                        </div>
                        <div className="text-xs mt-2 opacity-75	">Total Revenue</div>
                        <div className="flex justify-between items-baseline">
                            <div className="text-2xl font-bold">$12k</div>
                            <div className="text-xs font-bold flex flex-row items-center red-text opacity-85">
                                <div className="h-3 w-3 mr-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         version="1.1" x="0px" y="0px" viewBox="0 0 256 256"
                                         enableBackground="new 0 0 256 256" xmlSpace="preserve">
                                        <script/>
                                        <g>
                                            <g>
                                                <path fill="#e35553"
                                                      d="M246,76.4c0,4-1.5,7.4-4.4,10.4L138.4,190c-2.9,2.9-6.4,4.4-10.4,4.4c-4,0-7.4-1.5-10.4-4.4L14.4,86.8c-2.9-2.9-4.4-6.4-4.4-10.4c0-4,1.5-7.4,4.4-10.4c2.9-2.9,6.4-4.4,10.4-4.4h206.5c4,0,7.4,1.5,10.4,4.4C244.5,68.9,246,72.4,246,76.4z"/>
                                            </g>
                                        </g>
                                        <script/>
                                    </svg>
                                </div>
                                3%
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col w-5/12 ml-2">
                    <div className="custom-background flex flex-row p-4 m-2 rounded">
                        <div className="flex flex-col w-7/12">
                            <div className="text-xs mt-2 opacity-75	">Net Profit</div>
                            <div>
                                Total Orders
                            </div>
                            <div className="justify-between">
                                <span className="text-2xl font-bold">75</span>
                                <span className="text-2xl font-bold accent-green-400">3%</span>
                            </div>
                        </div>
                        <div className="flex flex-col w-5/12">
                            <CircularProgressBar percentage={70}/>
                            <div className="progress-note flex justify-center opacity-85"><sup>*</sup>The values here has been rounded off.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}