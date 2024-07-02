
import {
    ChainSlug,
    DeploymentMode,
    IntegrationTypes,
} from "@socket.tech/dl-core";
import { Hooks, ProjectConstants } from "../../../../src";
import { Tokens } from "../../../../src/enums";

export const pc: ProjectConstants = {
    [DeploymentMode.PROD]: {
  [Tokens.USDC]: {
    vaultChains: [
      // ChainSlug.SEPOLIA, 
      ChainSlug.ARBITRUM_SEPOLIA, // ChainSlug.OPTIMISM_SEPOLIA
    ],
    controllerChains: [ChainSlug.REYA_CRONOS],
    hook: {
      hookType: Hooks.LIMIT_EXECUTION_HOOK,
      limitsAndPoolId: {
        [ChainSlug.ARBITRUM_SEPOLIA]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "1000000",
            receivingLimit: "1000000"
          }
        },
        [ChainSlug.SEPOLIA]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "1000000",
            receivingLimit: "1000000"
          }
        },
        [ChainSlug.OPTIMISM_SEPOLIA]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "1000000",
            receivingLimit: "1000000"
          }
        },
        [ChainSlug.REYA_CRONOS]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "1000000",
            receivingLimit: "1000000"
          }
        }
      }
    }
  },
  [Tokens.WETH]: {
    vaultChains: [
      //ChainSlug.SEPOLIA, 
      ChainSlug.ARBITRUM_SEPOLIA, // ChainSlug.OPTIMISM_SEPOLIA
    ],    controllerChains: [ChainSlug.REYA_CRONOS],
    hook: {
      hookType: Hooks.LIMIT_EXECUTION_HOOK,
      limitsAndPoolId: {
        [ChainSlug.ARBITRUM_SEPOLIA]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "1000",
            receivingLimit: "1000"
          }
        },
        [ChainSlug.SEPOLIA]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "1000",
            receivingLimit: "1000"
          }
        },
        [ChainSlug.OPTIMISM_SEPOLIA]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "1000",
            receivingLimit: "1000"
          }
        },
        [ChainSlug.REYA_CRONOS]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "1000",
            receivingLimit: "1000"
          }
        }
      }
    }
  },
  [Tokens.WBTC]: {
    vaultChains: [
      //ChainSlug.SEPOLIA, 
      ChainSlug.ARBITRUM_SEPOLIA, // ChainSlug.OPTIMISM_SEPOLIA
    ],
    controllerChains: [ChainSlug.REYA_CRONOS],
    hook: {
      hookType: Hooks.LIMIT_EXECUTION_HOOK,
      limitsAndPoolId: {
        [ChainSlug.ARBITRUM_SEPOLIA]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "100",
            receivingLimit: "100"
          }
        },
        [ChainSlug.SEPOLIA]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "100",
            receivingLimit: "100"
          }
        },
        [ChainSlug.OPTIMISM_SEPOLIA]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "100",
            receivingLimit: "100"
          }
        },
        [ChainSlug.REYA_CRONOS]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "100",
            receivingLimit: "100"
          }
        }
      }
    }
  },
  [Tokens.USDT]: {
    vaultChains: [
      //ChainSlug.SEPOLIA, 
      ChainSlug.ARBITRUM_SEPOLIA, // ChainSlug.OPTIMISM_SEPOLIA
    ],
    controllerChains: [ChainSlug.REYA_CRONOS],
    hook: {
      hookType: Hooks.LIMIT_EXECUTION_HOOK,
      limitsAndPoolId: {
        [ChainSlug.ARBITRUM_SEPOLIA]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "1000000",
            receivingLimit: "1000000"
          }
        },
        [ChainSlug.SEPOLIA]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "1000000",
            receivingLimit: "1000000"
          }
        },
        [ChainSlug.OPTIMISM_SEPOLIA]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "1000000",
            receivingLimit: "1000000"
          }
        },
        [ChainSlug.REYA_CRONOS]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "1000000",
            receivingLimit: "1000000"
          }
        }
      }
    }
  },
  [Tokens.DAI]: {
    vaultChains: [
      //ChainSlug.SEPOLIA, 
      ChainSlug.ARBITRUM_SEPOLIA, // ChainSlug.OPTIMISM_SEPOLIA
    ],
    controllerChains: [ChainSlug.REYA_CRONOS],
    hook: {
      hookType: Hooks.LIMIT_EXECUTION_HOOK,
      limitsAndPoolId: {
        [ChainSlug.ARBITRUM_SEPOLIA]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "1000000",
            receivingLimit: "1000000"
          }
        },
        [ChainSlug.SEPOLIA]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "1000000",
            receivingLimit: "1000000"
          }
        },
        [ChainSlug.OPTIMISM_SEPOLIA]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "1000000",
            receivingLimit: "1000000"
          }
        },
        [ChainSlug.REYA_CRONOS]: {
          [IntegrationTypes.fast]: {
            sendingLimit: "1000000",
            receivingLimit: "1000000"
          }
        }
      }
    }
  }
}
};
