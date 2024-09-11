import React from 'react';
import DataCard from './DataCard.jsx';
import ChartCard from './ChartCard.jsx';
import ScenarioSimulation from './ScenarioSimulation.jsx';

const ReservoirMainContent = () => {
    return (
        <main className="mt-3 w-full max-w-[1393px] max-md:mr-2.5 max-md:max-w-full gap-20">
            {/* UP */}
            <div className="flex gap-40 max-md:flex-col">
                {/* LEFT */}
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="grow max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                                <DataCard
                                    title="Current Capacity"
                                    value="35.25"
                                    unit="galH2O"
                                    subtitle="Current Storage"
                                    subtitleValue="35.25"
                                />
                            </div>
                            <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                                <ChartCard
                                    title="Inflow and outflow"
                                    chartImage="https://cdn.builder.io/api/v1/image/assets/TEMP/83f2e380c8eff90f4bd40ac2cceac04190adc3609aa87d1afc75633190f6a45c?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859"
                                    legend={[
                                        { label: 'inflow', color: 'bg-indigo-600', value: '63%' },
                                        { label: 'outflow', color: 'bg-sky-300', value: '25%' }
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="grow max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                                <DataCard
                                    title="Forecasted Capacity"
                                    value="35.25"
                                    unit="galH2O"
                                    subtitle="Forecasted Storage"
                                    subtitleValue="35.25"
                                />
                            </div>
                            <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                                <ChartCard
                                    title="Highlights"
                                    chartImage="https://cdn.builder.io/api/v1/image/assets/TEMP/a5d15f752bd0cec642f6a55ae29f421381cf64271ed247fb33a699447d78ae54?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859"
                                    legend={[
                                        { label: 'water', color: 'bg-indigo-600', value: '63%' },
                                        { label: 'used', color: 'bg-sky-300', value: '25%' }
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DOWN */}
            <div className=" mt-14 w-full max-w-[1400px] max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
                <div className="flex gap-40 max-md:flex-col">
                    {/* LEFT */}
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="grow max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <ChartCard
                                        title="Usage Efficiency"
                                        chartImage="https://cdn.builder.io/api/v1/image/assets/TEMP/df4c1a79bb817135030499d89ed4bf9ab5515918fe572a79ce7b78ce3572f546?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859"
                                        legend={[
                                            { label: 'Inflow', color: 'bg-indigo-600', value: '63%' },
                                            { label: 'Outflow', color: 'bg-sky-300', value: '25%' }
                                        ]}
                                    />
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <ChartCard
                                        title="Critical Score"
                                        chartImage="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c9ac8fbc7da19e09f6732e75ab9d6dd9d9d053f5cfd5cdbf357a8e72873f8d?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859"
                                        legend={[
                                            { label: 'water', color: 'bg-indigo-600', value: '63%' },
                                            { label: 'used', color: 'bg-sky-300', value: '25%' }
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="grow max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <ScenarioSimulation />
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b79bb8c25e4e59e7d6902aa618b710a131f8d4523f8365f48bfacc4be0bf435c?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" alt="Scenario simulation chart" className="object-contain grow w-full rounded-3xl aspect-[0.99] shadow-[13px_18px_26px_rgba(0,122,255,0.46)] max-md:mt-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ReservoirMainContent;