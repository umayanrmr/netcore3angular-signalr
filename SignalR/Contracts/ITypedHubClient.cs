using SignalR.DTO;
using System.Threading.Tasks;

namespace SignalR.Contracts
{
    public interface ITypedHubClient
    {
        Task BroadcastMessage(MessageDTO message);
    }
}
