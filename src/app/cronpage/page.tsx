import AgentX from "@/components/agentx";
import { checkMentions, processMentions } from "@/components/lib";
import { useEffect } from "react";

export default function Cron() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await checkMentions("agentheysolana");
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };


        const processMent = async () => {
            try {
                const res = await processMentions();
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };
        // Fetch data immediately and then every 5 seconds
        fetchData();
        processMent();
        const interval = setInterval(() => { fetchData(); processMent() }, 5000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="overflow-x-hidden">
            <h2>Cron Running</h2>
        </div>
    );
}
