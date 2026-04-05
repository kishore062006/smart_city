import React from 'react';
import { MapPin, AlertCircle, CheckCircle, Clock, Filter } from 'lucide-react';

const MOCK_ISSUES = [
  { id: 'TKT-892', type: 'Water Leakage', location: 'Downtown Ave & 4th St', status: 'Open', priority: 'High', time: '2 hrs ago', reporter: 'Jane D.' },
  { id: 'TKT-891', type: 'Illegal Dumping', location: 'Riverside Park North', status: 'In Progress', priority: 'Medium', time: '5 hrs ago', reporter: 'Alex M.' },
  { id: 'TKT-890', type: 'Broken Streetlight', location: 'Oakwood Residential', status: 'Resolved', priority: 'Low', time: '1 day ago', reporter: 'Sarah K.' },
  { id: 'TKT-889', type: 'Polluted Water Body', location: 'Lakeview Creek', status: 'Open', priority: 'Critical', time: '1 day ago', reporter: 'Mike T.' },
];

export function AuthorityPortal() {
  return (
    <div className="flex-1 h-screen overflow-y-auto bg-[#0a0a0a] text-zinc-300 p-8 pl-[300px] md:pl-[320px] font-mono">
      <header className="mb-8 flex justify-between items-end border-b border-zinc-800 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            Civic Command Center
          </h2>
          <p className="text-zinc-500 text-sm mt-2">Real-time crowdsourced environmental issue tracking.</p>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <p className="text-xs text-zinc-500 uppercase tracking-wider">Open Tickets</p>
            <p className="text-2xl font-bold text-red-400">142</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-zinc-500 uppercase tracking-wider">Resolved (7d)</p>
            <p className="text-2xl font-bold text-emerald-400">89</p>
          </div>
        </div>
      </header>

      <div className="flex gap-4 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm hover:bg-zinc-800 transition-colors">
          <Filter size={16} /> Filter by SDG
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm hover:bg-zinc-800 transition-colors">
          <MapPin size={16} /> Map View
        </button>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 uppercase tracking-wider text-xs">
            <tr>
              <th className="p-4 font-medium">Ticket ID</th>
              <th className="p-4 font-medium">Issue Type</th>
              <th className="p-4 font-medium">Location</th>
              <th className="p-4 font-medium">Priority</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Reported By</th>
              <th className="p-4 font-medium">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {MOCK_ISSUES.map((issue) => (
              <tr key={issue.id} className="hover:bg-zinc-800/30 transition-colors cursor-pointer group">
                <td className="p-4 text-white font-medium">{issue.id}</td>
                <td className="p-4">{issue.type}</td>
                <td className="p-4 flex items-center gap-2">
                  <MapPin size={14} className="text-zinc-500" />
                  {issue.location}
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    issue.priority === 'Critical' ? 'bg-red-500/20 text-red-400' :
                    issue.priority === 'High' ? 'bg-orange-500/20 text-orange-400' :
                    issue.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {issue.priority}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {issue.status === 'Open' && <AlertCircle size={14} className="text-red-400" />}
                    {issue.status === 'In Progress' && <Clock size={14} className="text-amber-400" />}
                    {issue.status === 'Resolved' && <CheckCircle size={14} className="text-emerald-400" />}
                    <span className={
                      issue.status === 'Open' ? 'text-red-400' :
                      issue.status === 'In Progress' ? 'text-amber-400' :
                      'text-emerald-400'
                    }>{issue.status}</span>
                  </div>
                </td>
                <td className="p-4 text-zinc-500">{issue.reporter}</td>
                <td className="p-4 text-zinc-500">{issue.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
