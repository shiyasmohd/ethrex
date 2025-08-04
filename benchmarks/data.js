window.BENCHMARK_DATA = {
  "lastUpdate": 1754321518209,
  "repoUrl": "https://github.com/shiyasmohd/ethrex",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "47506558+MegaRedHand@users.noreply.github.com",
            "name": "Tomás Grüner",
            "username": "MegaRedHand"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb1fd37e64e6bc51ee7bdf0f5491fa401535604d",
          "message": "fix(l1): disable default request body limit on authenticated RPC (#3929)\n\n**Motivation**\n\nConsensus client calls to `engine_newPayload` sometimes failed with `413\npayload too large` HTTP errors (and sometimes `broken pipe`, which might\nbe related).\n\n**Description**\n\nThis PR solves this by disabling the request body limit, since it\ndoesn't make much sense to add a limit to authenticated requests.",
          "timestamp": "2025-08-01T23:30:19Z",
          "tree_id": "73cd781393cb7f53596e34b4ef6a27bc203b2e20",
          "url": "https://github.com/shiyasmohd/ethrex/commit/fb1fd37e64e6bc51ee7bdf0f5491fa401535604d"
        },
        "date": 1754318898953,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 165142559979,
            "range": "± 1335012816",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mrugiero@gmail.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b5f17e54d97e5d29ef77858e67d780a134a77b9",
          "message": "fix(l1): avoid broadcasting duplicate transactions (#3897)\n\n**Motivation**\n\nWire protocol correctness. Crucially, sending a transaction back to its\nsource is punishable by connection drop.\n\n**Description**\n\nAdd an early check for presence in the mempool for received\ntransactions, update the per-peer filters, and use them to avoid sending\nthem transactions they already know about in the `Transactions` relay\nand the `SendNewPooledTransactionHashes` paths.",
          "timestamp": "2025-08-04T14:07:32Z",
          "tree_id": "8d31b85b81f96d69ae44bddc24f467718c3d6c33",
          "url": "https://github.com/shiyasmohd/ethrex/commit/2b5f17e54d97e5d29ef77858e67d780a134a77b9"
        },
        "date": 1754321516379,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 163350198379,
            "range": "± 276847874",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}