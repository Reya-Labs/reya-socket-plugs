
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
    vaultChains: [ChainSlug.ARBITRUM_SEPOLIA, ChainSlug.OPTIMISM_SEPOLIA, ChainSlug.SEPOLIA],
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
    vaultChains: [ChainSlug.ARBITRUM_SEPOLIA, ChainSlug.OPTIMISM_SEPOLIA, ChainSlug.SEPOLIA],
    controllerChains: [ChainSlug.REYA_CRONOS],
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
    vaultChains: [ChainSlug.ARBITRUM_SEPOLIA, ChainSlug.OPTIMISM_SEPOLIA, ChainSlug.SEPOLIA],
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
    vaultChains: [ChainSlug.ARBITRUM_SEPOLIA, ChainSlug.OPTIMISM_SEPOLIA, ChainSlug.SEPOLIA],
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
    vaultChains: [ChainSlug.ARBITRUM_SEPOLIA, ChainSlug.OPTIMISM_SEPOLIA, ChainSlug.SEPOLIA],
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
  [Tokens.WSTETH]: {
    vaultChains: [ChainSlug.ARBITRUM_SEPOLIA, ChainSlug.OPTIMISM_SEPOLIA, ChainSlug.SEPOLIA],
    controllerChains: [ChainSlug.REYA_CRONOS],
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
  [Tokens.USDE]: {
    vaultChains: [ChainSlug.ARBITRUM_SEPOLIA, ChainSlug.OPTIMISM_SEPOLIA, ChainSlug.SEPOLIA],
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
  [Tokens.SUSDE]: {
    vaultChains: [ChainSlug.ARBITRUM_SEPOLIA, ChainSlug.OPTIMISM_SEPOLIA, ChainSlug.SEPOLIA],
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
  [Tokens.DEUSD]: {
    vaultChains: [ChainSlug.SEPOLIA],
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
  [Tokens.SDEUSD]: {
    vaultChains: [ChainSlug.SEPOLIA],
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
