using Microsoft.AspNetCore.SignalR;
using SignalR.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalR
{
    public class NotifyHub : Hub<ITypedHubClient>
    {
    }
}
